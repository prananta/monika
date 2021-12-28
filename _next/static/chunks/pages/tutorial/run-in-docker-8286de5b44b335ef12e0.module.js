(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{Fw0L:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/run-in-docker",function(){return a("ofpt")}])},ofpt:function(n,e,a){"use strict";a.r(e),a.d(e,"meta",(function(){return m})),a.d(e,"default",(function(){return b}));var o=a("wx14"),t=a("Ff2n"),r=a("q1tI"),c=a.n(r),i=a("7ljp"),u=a("er9C"),m=(c.a.createElement,{id:"run-monika-in-docker",title:"Run Monika in Docker"}),l={meta:m},p=n=>{var{children:e}=n,a=Object(t.a)(n,["children"]);return Object(i.b)(u.a,Object(o.a)({meta:m},a),e)};function b(n){var{components:e}=n,a=Object(t.a)(n,["components"]);return Object(i.b)(p,Object(o.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Monika is available as a docker image. Paste a copy of your configuration file ",Object(i.b)("inlineCode",{parentName:"p"},"monika.yml")," into the current directory.\nFrom the same directory, you can run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# Run Monika in foreground\ndocker run --name monika -v ${PWD}/monika.yml:/config/monika.yml --detach hyperjump/monika:latest\n\n# Or, if you prefer to run Monika in the background\ndocker run -d --name monika -v ${PWD}/monika.yml:/config/monika.yml --detach hyperjump/monika:latest\n")),Object(i.b)("p",null,"Once monika is up and running, you can see its log using"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker logs monika\n")),Object(i.b)("p",null,"Or you can stop the container with"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker stop monika\n")))}b.isMDXComponent=!0}},[["Fw0L",0,1,2,3,4]]]);