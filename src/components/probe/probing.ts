/**********************************************************************************
 * MIT License                                                                    *
 *                                                                                *
 * Copyright (c) 2021 Hyperjump Technology                                        *
 *                                                                                *
 * Permission is hereby granted, free of charge, to any person obtaining a copy   *
 * of this software and associated documentation files (the "Software"), to deal  *
 * in the Software without restriction, including without limitation the rights   *
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      *
 * copies of the Software, and to permit persons to whom the Software is          *
 * furnished to do so, subject to the following conditions:                       *
 *                                                                                *
 * The above copyright notice and this permission notice shall be included in all *
 * copies or substantial portions of the Software.                                *
 *                                                                                *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     *
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       *
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    *
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         *
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  *
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  *
 * SOFTWARE.                                                                      *
 **********************************************************************************/

import { RequestConfig } from '../../interfaces/request'
import { executeRequest } from './request'
import { AxiosResponseWithExtraData } from '../../interfaces/request'
import * as Handlebars from 'handlebars'

export async function probing(
  requestConfig: RequestConfig,
  responses: Array<AxiosResponseWithExtraData>
) {
  try {
    // Compile URL using handlebars to render URLs that uses previous responses data
    const { url } = requestConfig
    const requestURL = url
    const renderURL = Handlebars.compile(requestURL)
    const renderedURL = renderURL({ responses })

    // Compile headers using handlebars to render URLs that uses previous responses data.
    // In some case such as value is not string, it will be returned as is without being compiled.
    // If the request does not have any headers, then it should skip this process.
    if (requestConfig.headers) {
      for await (const header of Object.keys(requestConfig.headers)) {
        try {
          const rawHeader = requestConfig.headers[header]
          const renderHeader = Handlebars.compile(rawHeader)
          const renderedHeader = renderHeader({ responses })

          requestConfig.headers = {
            ...requestConfig.headers,
            [header]: renderedHeader,
          }
        } catch (_) {}
      }
    }

    // Do the request using compiled URL and compiled headers (if exists)
    const res = await executeRequest({
      ...requestConfig,
      url: renderedURL,
    })
    return res as AxiosResponseWithExtraData
  } catch (error) {
    let errResponseCode
    let errData
    let errHdr
    let errText

    if (error.response) {
      // 400, 500 get here
      errResponseCode = error.response.status
      errData = error.response.data
      errHdr = error.response.headers
    } else if (error.request) {
      // timeout is here, ECONNABORTED, ENOTFOUND
      switch (error.code) {
        case 'ECONNABORTED':
          errResponseCode = 599 // https://httpstatuses.com/599
          errText = 'TIMEDOUT'
          break

        case 'ENOTFOUND':
          errResponseCode = 0 // not found, the abyss never returned a statusCode
          errText = 'NOTFOUND' // assign some unique errResponseCode for decoding later.
          break

        case 'ECONNRESET':
          errResponseCode = 1 // connection reset from target, assign some unique number responsecCode
          errText = 'ECONNRESET'
          break

        case 'ECONNREFUSED':
          errResponseCode = 2 // got rejected, again
          errText = 'ECONNREFUSED'
          break

        default:
          errResponseCode = error.code // just return the error code
          errText = 'unknown error'
      }
      errData = ''
      errHdr = ''
    } else {
      // other errors
      errResponseCode = error.code
      errText = 'unknown error'
      errData = ''
      errHdr = ''
    }

    return {
      data: errData,
      status: errResponseCode,
      statusText: errText,
      headers: errHdr,
      config: error.config, // get the response from error.config instead of error.response.xxx as -
      extraData: error.config.extraData, // the response data lives in the data.config space
    } as AxiosResponseWithExtraData
  }
}