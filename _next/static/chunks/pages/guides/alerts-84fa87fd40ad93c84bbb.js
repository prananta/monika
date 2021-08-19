_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{ZM4Q:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/alerts",function(){return a("gmV/")}])},"gmV/":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("Ff2n"),b=a("q1tI"),l=a.n(b),i=a("7ljp"),c=a("er9C"),o=["children"],s=["components"],p=(l.a.createElement,{}),m={meta:p},j=function(e){var t=e.children,a=Object(r.a)(e,o);return Object(i.b)(c.a,Object(n.a)({meta:p},a),t)};function d(e){var t=e.components,a=Object(r.a)(e,s);return Object(i.b)(j,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"alerts"},"Alerts",Object(i.b)("a",{parentName:"h1",href:"#alerts",title:"Direct link to heading",className:"anchor"},Object(i.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(i.b)("p",null,"Alerts are the types of condition that will trigger Monika to send notification. It is an array located on probes defined in the config file ",Object(i.b)("inlineCode",{parentName:"p"},"monika.json")," like so."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Name of the probe",\n      ...\n      "alerts": ["status-not-2xx", "response-time-greater-than-200-ms"]\n    },\n  ]\n')),Object(i.b)("h2",{id:"alerts-formats"},"Alerts formats",Object(i.b)("a",{parentName:"h2",href:"#alerts-formats",title:"Direct link to heading",className:"anchor"},Object(i.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(i.b)("p",null,"You can configure alerts either in string format or object format for more advanced case and flexible use:"),Object(i.b)("h3",{id:"1-alert-in-string-format"},"1. Alert in string format",Object(i.b)("a",{parentName:"h3",href:"#1-alert-in-string-format",title:"Direct link to heading",className:"anchor"},Object(i.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(i.b)("p",null,"This is the initial format used by Monika. It supports 2 types of alerts conditions:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"HTTP Code")),Object(i.b)("p",null,"To measure returned HTTP code."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Value"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"status-not-2xx"),Object(i.b)("td",{parentName:"tr",align:null},"Condition met if the returned http code from the probes is less than 200 or greater than 299.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Response Time")),Object(i.b)("p",null,"To measure response time. The time value and unit can be changed."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Value"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"response-time-greater-than-",Object(i.b)("inlineCode",{parentName:"td"},"200"),"-",Object(i.b)("inlineCode",{parentName:"td"},"ms")),Object(i.b)("td",{parentName:"tr",align:null},"Condition met if the response time from the probes URL is greater than 200 milliseconds.")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The time value can be changed to any positive integer value. In above example, the value is ",Object(i.b)("inlineCode",{parentName:"li"},"200"),"."),Object(i.b)("li",{parentName:"ul"},"The time unit can be changed to ",Object(i.b)("inlineCode",{parentName:"li"},"s")," second. In above example, the unit is ",Object(i.b)("inlineCode",{parentName:"li"},"ms")," for milliseconds.")),Object(i.b)("p",null,"Example changed time value and unit:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"response-time-greater-than-1-s\n")),Object(i.b)("p",null,"means Monika will send notification if the response of the probes URL is received after 1 second."),Object(i.b)("h3",{id:"2-alert-in-object-format"},"2. Alert in object format",Object(i.b)("a",{parentName:"h3",href:"#2-alert-in-object-format",title:"Direct link to heading",className:"anchor"},Object(i.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(i.b)("p",null,"This is the new format for more complex condition. Use this one if the previous format doesn't cater to your need."),Object(i.b)("p",null,"Define alert like so"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "alerts" : [\n    {\n      "query": "response.status == 500",\n      "subject": "Subject for notification purpose",\n      "message": "Message for notification purpose"\n    }\n  ]\n')),Object(i.b)("p",null,"The response object can be queried in the ",Object(i.b)("inlineCode",{parentName:"p"},"query")," property of the alert. Alert will be triggered when the query is returning truthy value."),Object(i.b)("p",null,"These are values that are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"response.status: HTTP status code of the reponse"),Object(i.b)("li",{parentName:"ul"},"response.time: the time it takes to perform a HTTP request"),Object(i.b)("li",{parentName:"ul"},"response.size: size of the response in bytes"),Object(i.b)("li",{parentName:"ul"},"response.headers: HTTP response headers"),Object(i.b)("li",{parentName:"ul"},"response.body: HTTP response body (if content-type is JSON, it will be parsed automatically)")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"response.headers")," and ",Object(i.b)("inlineCode",{parentName:"p"},"response.body")," can be queried further with object access syntax."),Object(i.b)("p",null,"For example, to trigger alert when content-type is not json you may use"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "alerts" : [\n    {\n      "query": "response.headers[\'content-type\'] != \\"application/json\\"",\n      "subject": "Invalid Content-Type",\n      "message": "The url does not return response with expected content-type."\n    }\n  ]\n')),Object(i.b)("p",null,"Or to query value inside the body"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'`json\n  "alerts" : [\n    {\n      "query": "response.body.data.todos[0].title != \\"Drink water\\"",\n      "subject": "Invalid order of data",\n      "message": "\'Drink water\' should always be the first in the list"\n    }\n  ]\n')),Object(i.b)("p",null,"These operators are available:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Numeric arithmetic"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x + y"),Object(i.b)("td",{parentName:"tr",align:null},"Add")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x - y"),Object(i.b)("td",{parentName:"tr",align:null},"Subtract")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x ","*"," y"),Object(i.b)("td",{parentName:"tr",align:null},"Multiply")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x / y"),Object(i.b)("td",{parentName:"tr",align:null},"Divide")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x % y"),Object(i.b)("td",{parentName:"tr",align:null},"Modulo")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x ^ y"),Object(i.b)("td",{parentName:"tr",align:null},"Power")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Comparisons"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x == y"),Object(i.b)("td",{parentName:"tr",align:null},"Equals")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x != y"),Object(i.b)("td",{parentName:"tr",align:null},"Does not equal")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x < y"),Object(i.b)("td",{parentName:"tr",align:null},"Less than")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x <= y"),Object(i.b)("td",{parentName:"tr",align:null},"Less than or equal to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x > y"),Object(i.b)("td",{parentName:"tr",align:null},"Greater than")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x >= y"),Object(i.b)("td",{parentName:"tr",align:null},"Greater than or equal to")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x ~= y"),Object(i.b)("td",{parentName:"tr",align:null},"Regular expression match")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x in (a, b, c)"),Object(i.b)("td",{parentName:"tr",align:null},"Equivalent to (x == a or x == b or x == c)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x not in (a, b, c)"),Object(i.b)("td",{parentName:"tr",align:null},"Equivalent to (x != a and x != b and x != c)")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Boolean logic"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x or y"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean or")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x and y"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean and")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"not x"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean not")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"x ? y : z"),Object(i.b)("td",{parentName:"tr",align:null},"If boolean x, value y, else z")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"( x )"),Object(i.b)("td",{parentName:"tr",align:null},"Explicity operator precedence")))),Object(i.b)("p",null,"There are also several helper functions available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"has(object, property)"),": Checks whether an object has searched property."),Object(i.b)("p",{parentName:"li"},"example: ",Object(i.b)("inlineCode",{parentName:"p"},'has(response.body, "data")'),' checks if there is "data" property inside response.body')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"lowerCase(string)"),": Converts string to lower case"),Object(i.b)("p",{parentName:"li"},"example: ",Object(i.b)("inlineCode",{parentName:"p"},"lowerCase(response.body.message)")," converts message string value to lower case")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"upperCase(string)"),": Converts string to upper case"),Object(i.b)("p",{parentName:"li"},"example: ",Object(i.b)("inlineCode",{parentName:"p"},"upperCase(response.body.message)")," converts message string value to upper case")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"startsWith(string, target)"),": Checks if string starts with the given target string"),Object(i.b)("p",{parentName:"li"},"example: ",Object(i.b)("inlineCode",{parentName:"p"},'startsWith(response.body.message, "Hello")'),' checks if message string value starts with "Hello"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"endsWith(string, target)"),": Checks if string ends with the given target string"),Object(i.b)("p",{parentName:"li"},"example: ",Object(i.b)("inlineCode",{parentName:"p"},'startsWith(response.body.message, "world!")'),' checks if message string value ends with "world!"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"includes(collection, value)"),": Checks if value is in collection. If collection is a string, it's checked for a substring of value"),Object(i.b)("p",{parentName:"li"},"example 1: ",Object(i.b)("inlineCode",{parentName:"p"},'includes(response.body.prizes, "gold")'),' checks if "gold" exists in prizes array.'),Object(i.b)("p",{parentName:"li"},"example 2: ",Object(i.b)("inlineCode",{parentName:"p"},'includes(response.body.message, "ello")'),' checks if "ello" is substring of message string.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"size(collection)"),": Gets length of array or string values."),Object(i.b)("p",{parentName:"li"},"example: ",Object(i.b)("inlineCode",{parentName:"p"},"size(response.body.data.items)")," gets the count of items."))),Object(i.b)("h2",{id:"further-reading"},"Further reading",Object(i.b)("a",{parentName:"h2",href:"#further-reading",title:"Direct link to heading",className:"anchor"},Object(i.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"./probes"},"Probes")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"./notifications"},"Notifications"))))}d.isMDXComponent=!0}},[["ZM4Q",0,1,2,3,4,5]]]);