_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{ScRu:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/notifications",function(){return a("c/vi")}])},"c/vi":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return m})),a.d(t,"default",(function(){return u}));var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),b=a.n(r),l=a("7ljp"),o=a("er9C"),c=["children"],p=["components"],m=(b.a.createElement,{id:"notifications",title:"Notifications"}),s={meta:m},d=function(e){var t=e.children,a=Object(i.a)(e,c);return Object(l.b)(o.a,Object(n.a)({meta:m},a),t)};function u(e){var t=e.components,a=Object(i.a)(e,p);return Object(l.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"notification-types"},"Notification Types",Object(l.b)("a",{parentName:"h2",href:"#notification-types",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Monika will send notifications to you whenever ",Object(l.b)("a",{parentName:"p",href:"https://hyperjumptech.github.io/monika/guides/alerts"},"alerts")," are triggered, e.g., when the response status of a probed URL is not ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_success"},"2xx success code")," (",Object(l.b)("a",{parentName:"p",href:"https://hyperjumptech.github.io/monika/guides/alerts#1-http-code"},"status-not-2xx"),")."),Object(l.b)("p",null,"At this moment, Monika support these channel of notifications (You can use just one or more):"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#smtp"},"SMTP")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#mailgun"},"Mailgun")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#sendgrid"},"SendGrid")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#webhook"},"Webhook")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#slack-incoming-webhook"},"Slack")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#telegram"},"Telegram")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#whatsapp"},"WhatsApp Business")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#microsoft-teams"},"Microsoft Teams")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#discord"},"Discord")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#monika-whatsapp-notifier"},"Monika Whatsapp Notifier")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://hyperjumptech.github.io/monika/guides/notifications#facebook-workplace"},"Facebook Workplace"))),Object(l.b)("h2",{id:"configurations"},"Configurations",Object(l.b)("a",{parentName:"h2",href:"#configurations",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"To use one or more notifications, you need to define the settings in the monika.json file as shown below."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"notifications": [\n    {\n      "id": "unique-id-mailgun",\n      "type": "mailgun",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "apiKey": "YOUR_API_KEY",\n        "domain": "YOUR_DOMAIN"\n      }\n    },\n    {\n      "id": "unique-id-sendgrid",\n      "type": "sendgrid",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "apiKey": "YOUR_API_KEY"\n      }\n    },\n    {\n      "id": "unique-id-smtp",\n      "type": "smtp",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "hostname": "SMTP_HOSTNAME",\n        "port": 587,\n        "username": "SMTP_USERNAME",\n        "password": "SMTP_PASSWORD"\n      }\n    },\n    {\n      "id": "unique-id-webhook",\n      "type": "webhook",\n      "data": {\n        "method": "POST",\n        "url": "https://WEBHOOK_URL"\n      }\n    }\n  ],\n')),Object(l.b)("p",null,"Note that every triggered alert will be sent to you through all the notifications you defined in the monika.json, e.g., if you added ",Object(l.b)("inlineCode",{parentName:"p"},"webhook")," and ",Object(l.b)("inlineCode",{parentName:"p"},"smtp")," settings, you will receive the alert messages through both."),Object(l.b)("h2",{id:"smtp"},"SMTP",Object(l.b)("a",{parentName:"h2",href:"#smtp",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol"},"SMTP (Simple Mail Transfer Protocol)")," is a way to send email using the TCP/IP protocol. This is the easiest way to get notified when alerts are triggered. Use the following configuration to set up SMTP notification."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-smtp",\n  "type": "smtp",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "hostname": "smtp.mail.com",\n    "port": 587,\n    "username": "SMTP_USERNAME",\n    "password": "SMTP_PASSWORD"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Smtp12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"smtp"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Recipients"),Object(l.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Hostname"),Object(l.b)("td",{parentName:"tr",align:null},"The smtp host that you will be using for sending the email"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"smtp.gmail.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Port"),Object(l.b)("td",{parentName:"tr",align:null},"The port allowed to be used for sending mail in your host"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"587"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Username"),Object(l.b)("td",{parentName:"tr",align:null},"Registered username on your smtp server"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"yourusername@gmail.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Password"),Object(l.b)("td",{parentName:"tr",align:null},"The password set for your username"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"thepasswordforyourusername"))))),Object(l.b)("h3",{id:"example-using-gmail-smtp"},"Example using Gmail SMTP",Object(l.b)("a",{parentName:"h3",href:"#example-using-gmail-smtp",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"To use Gmail SMTP with Monika,"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"You need to have a Gmail account."),Object(l.b)("li",{parentName:"ol"},"Use ",Object(l.b)("inlineCode",{parentName:"li"},"smtp.gmail.com")," for ",Object(l.b)("inlineCode",{parentName:"li"},"hostname"),"."),Object(l.b)("li",{parentName:"ol"},"Use ",Object(l.b)("inlineCode",{parentName:"li"},"587")," for ",Object(l.b)("inlineCode",{parentName:"li"},"port"),"."),Object(l.b)("li",{parentName:"ol"},"Use your Gmail address for ",Object(l.b)("inlineCode",{parentName:"li"},"username"),"."),Object(l.b)("li",{parentName:"ol"},"Use your Gmail password for ",Object(l.b)("inlineCode",{parentName:"li"},"password"),".",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"If you have activated 2-Factor-Authentication (2FA), you need to ",Object(l.b)("a",{parentName:"li",href:"https://support.google.com/accounts/answer/185833"},"create an App Password from your Account Settings"),". Then use the app password for ",Object(l.b)("inlineCode",{parentName:"li"},"password"),".")))),Object(l.b)("h2",{id:"mailgun"},"Mailgun",Object(l.b)("a",{parentName:"h2",href:"#mailgun",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Mailgun is an email notification delivery provided by Mailgun email service. To use mailgun for your notification,"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"You would need a ",Object(l.b)("a",{parentName:"li",href:"https://app.mailgun.com/"},"mailgun account"),"."),Object(l.b)("li",{parentName:"ol"},"Get your ",Object(l.b)("strong",{parentName:"li"},"API key")," by referring to ",Object(l.b)("a",{parentName:"li",href:"https://help.mailgun.com/hc/en-us/articles/203380100-Where-Can-I-Find-My-API-Key-and-SMTP-Credentials"},"this documentation"),"."),Object(l.b)("li",{parentName:"ol"},"For your ",Object(l.b)("strong",{parentName:"li"},"domain"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u2022 If you are on the free plan, add authorized recipients as instructed ",Object(l.b)("a",{parentName:"li",href:"https://help.mailgun.com/hc/en-us/articles/217531258-Authorized-Recipients"},"here"),"."),Object(l.b)("li",{parentName:"ul"},"\u2022 If you want to use your own domain, refer ",Object(l.b)("a",{parentName:"li",href:"https://help.mailgun.com/hc/en-us/articles/203637190-How-Do-I-Add-or-Delete-a-Domain"},"here")," to add it."))),Object(l.b)("li",{parentName:"ol"},"After that, put them in ",Object(l.b)("inlineCode",{parentName:"li"},"monika.json")," configuration as follows:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-mailgun",\n  "type": "mailgun",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "apiKey": "YOUR_API_KEY",\n    "domain": "YOUR_DOMAIN"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Mailgun12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"mailgun"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Recipients"),Object(l.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Api Key"),Object(l.b)("td",{parentName:"tr",align:null},"Mailgun account api key, mailgun registered key to identify your account"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"MAILGUN_API_KEY"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Domain"),Object(l.b)("td",{parentName:"tr",align:null},"The domain to set in Mailgun"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sandboxmail.mailgun.com"))))),Object(l.b)("h2",{id:"sendgrid"},"Sendgrid",Object(l.b)("a",{parentName:"h2",href:"#sendgrid",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Similar to mailgun, sendgrid is also an email delivery service. Make sure you have a ",Object(l.b)("a",{parentName:"p",href:"https://app.sendgrid.com/"},"sendgrid account"),". To obtain your API key, refer to ",Object(l.b)("a",{parentName:"p",href:"https://sendgrid.com/docs/ui/account-and-settings/api-keys/"},"sendgrid documentation"),". Then put the API key in Monika's configuration as follows:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-sendgrid",\n  "type": "sendgrid",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "apiKey": "YOUR_API_KEY"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Sendgrid12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sendgrid"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Recipients"),Object(l.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Api Key"),Object(l.b)("td",{parentName:"tr",align:null},"Sendgrid account api key, sendgrid registered key to identify your account"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"70e34aba-0ea908325"))))),Object(l.b)("h2",{id:"webhook"},"Webhook",Object(l.b)("a",{parentName:"h2",href:"#webhook",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Monika supports Webhook. To enable notification via Webhook."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-webhook",\n  "type": "webhook",\n  "data": {\n    "url": "https://YOUR_WEBHOOK_URL"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Webhook12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"webhook"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Url"),Object(l.b)("td",{parentName:"tr",align:null},"The URL of the server that will receive the webhook notification"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"https://yourwebsite.com/webhook"))))),Object(l.b)("p",null,"Using the webhook type configuration, ",Object(l.b)("inlineCode",{parentName:"p"},"Monika")," will send a request with the following body:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"body: {\n  url: string\n  time: string\n  alert: string\n}\n")),Object(l.b)("h2",{id:"slack-incoming-webhook"},"Slack Incoming Webhook",Object(l.b)("a",{parentName:"h2",href:"#slack-incoming-webhook",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Monika supports Slack Incoming Webhook. To enable notification via Slack, you must have a ",Object(l.b)("inlineCode",{parentName:"p"},"Slack's Incoming Webhook URL"),". Please consult to ",Object(l.b)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Sending messages using Incoming Webhooks")," documentation."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-slack",\n  "type": "slack",\n  "data": {\n    "url": "https://YOUR_SLACK_INCOMING_WEBHOOK_URL"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Slack12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"slack"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Url"),Object(l.b)("td",{parentName:"tr",align:null},"The URL of your slack incoming webhook"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"https://slackwebhook.com/channel"))))),Object(l.b)("h2",{id:"telegram"},"Telegram",Object(l.b)("a",{parentName:"h2",href:"#telegram",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Monika supports Telegram. To enable notification via Telegram, you must have a Telegram bot. Please consult to ",Object(l.b)("a",{parentName:"p",href:"https://core.telegram.org/bots"},"Bots: An introduction for developers"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-telegram",\n  "type": "telegram",\n  "data": {\n    "group_id": "YOUR_GROUP_ID",\n    "bot_token": "YOUR_BOT_TOKEN"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Telegram12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"telegram"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Group ID"),Object(l.b)("td",{parentName:"tr",align:null},"The ID of group where the bot should send the messages"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"-123456"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Bot Token"),Object(l.b)("td",{parentName:"tr",align:null},"The Token of your telegram bot"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"abcdefg:hijklmnopqrstuvwxyz"))))),Object(l.b)("h2",{id:"whatsapp"},"Whatsapp",Object(l.b)("a",{parentName:"h2",href:"#whatsapp",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Monika supports Whatsapp notification. To enable notification via whatsapp, you must have a registered user in whatsapp business api server. Please refer to ",Object(l.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp"},"WhatsApp Business API")," documentation."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-whatsapp",\n  "type": "whatsapp",\n  "data": {\n    "recipients": ["628123456789"],\n    "url": "https://yourwhatsappapiserver.com",\n    "username": "whatsappusername",\n    "password": "whatsapppassword"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"whatsapp12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"whatsapp"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Recipients"),Object(l.b)("td",{parentName:"tr",align:null},"An array phone number registered for whatsapp, should start with your country code number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'["628123456790", "629745834093"]'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Url"),Object(l.b)("td",{parentName:"tr",align:null},"The URL of your whatsapp api server"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"https://yourwhatsappapiserver.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Username"),Object(l.b)("td",{parentName:"tr",align:null},"Your whatsapp api user name"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"username"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Userpassword"),Object(l.b)("td",{parentName:"tr",align:null},"Your whatsapp api user password"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"userpassword"))))),Object(l.b)("h2",{id:"microsoft-teams"},"Microsoft Teams",Object(l.b)("a",{parentName:"h2",href:"#microsoft-teams",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Monika supports sending notifications via Microsoft Teams. In order to be able to send notifications via Microsoft Teams, you may need to add Connectors and webhooks to your channel. Please refer to ",Object(l.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using"},"Microsoft Teams Documentation")," to enable connectors and webhooks."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-teams",\n  "type": "teams",\n  "data": {\n    "url": "https://YOUR_TEAMS_WEBHOOK_URL"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Webhook12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"webhook"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Url"),Object(l.b)("td",{parentName:"tr",align:null},"The URL of your Microsoft Teams Webhook"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"https://<company>.webhook.office.com/"))))),Object(l.b)("h2",{id:"discord"},"Discord",Object(l.b)("a",{parentName:"h2",href:"#discord",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Monika supports Discord. To enable notification via Discord, you must create a discord webhook first. More info at ",Object(l.b)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks"},"Discord webhook documentation")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-webhook",\n  "type": "discord",\n  "data": {\n    "url": "https://YOUR_DISCORD_URL"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Discord12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"discord"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Url"),Object(l.b)("td",{parentName:"tr",align:null},"The URL of the Discord Webhook that will receive notification"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"https://discord.com/api/webhook/<webhook.id>/<webhook.token>"))))),Object(l.b)("h2",{id:"facebook-workplace"},"Facebook Workplace",Object(l.b)("a",{parentName:"h2",href:"#facebook-workplace",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"Monika supports Facebook Workplace. To enable notifiation via Workplace, you must create custom integration first. More info at ",Object(l.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/workplace/custom-integrations-new/"},"Facebook Workplace Custom Integrations")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-workplace-id",\n  "type": "workplace",\n  "data": {\n    "thread_id": "12345678910",\n    "access_token": "your_custom_integration_access_token"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Workplace12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"workplace"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ThreadID"),Object(l.b)("td",{parentName:"tr",align:null},"It's located at thread url, in the last segment"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"6367478493277649"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AccessToken"),Object(l.b)("td",{parentName:"tr",align:null},"Workplace access token for custom integration"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"DQVJzYWtsdHRJRWIxUk9uOG5VV..."))))),Object(l.b)("h2",{id:"monika-whatsapp-notifier"},"Monika Whatsapp Notifier",Object(l.b)("a",{parentName:"h2",href:"#monika-whatsapp-notifier",title:"Direct link to heading",className:"anchor"},Object(l.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(l.b)("p",null,"You can get a notification from Monika to your Whatsapp number without having a Whatsapp Business account. First, you must create a ",Object(l.b)("a",{parentName:"p",href:"https://whatsapp.hyperjump.tech"},"Monika Whatsapp Notifier account"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-monika-notif",\n  "type": "monika-notif",\n  "data": {\n    "url": "https://YOUR_MONIKA_NOTIF_URL"\n  }\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Key"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ID"),Object(l.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"MonikaNotif12345"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Type"),Object(l.b)("td",{parentName:"tr",align:null},"Notification types"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"monika-notif"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Url"),Object(l.b)("td",{parentName:"tr",align:null},"The URL of the Monika Notif Webhook link"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"https://whatsapp.hyperjump.tech/api/notify?token=<webhook.token>"))))),Object(l.b)("p",null,"Keep watch on these pages, new notification methods are being developed."))}u.isMDXComponent=!0}},[["ScRu",0,1,5,2,3,4,6]]]);