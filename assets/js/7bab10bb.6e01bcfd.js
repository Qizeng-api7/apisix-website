"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[44993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,h=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},74245:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"limit-req"},i=void 0,o={unversionedId:"plugins/limit-req",id:"version-2.12/plugins/limit-req",isDocsHomePage:!1,title:"limit-req",description:"Introduction",source:"@site/docs-apisix_versioned_docs/version-2.12/plugins/limit-req.md",sourceDirName:"plugins",slug:"/plugins/limit-req",permalink:"/docs/apisix/2.12/plugins/limit-req",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.12/docs/en/latest/plugins/limit-req.md",tags:[],version:"2.12",frontMatter:{title:"limit-req"},sidebar:"version-2.12/docs",previous:{title:"consumer-restriction",permalink:"/docs/apisix/2.12/plugins/consumer-restriction"},next:{title:"limit-conn",permalink:"/docs/apisix/2.12/plugins/limit-conn"}},p=[{value:"Summary",id:"summary",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example",id:"example",children:[{value:"How to enable on the <code>route</code> or <code>service</code>",id:"how-to-enable-on-the-route-or-service",children:[]},{value:"How to enable on the <code>consumer</code>",id:"how-to-enable-on-the-consumer",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attributes"},"Attributes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#example"},"Example"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-enable-on-the-route-or-service"},"How to enable on the ",(0,r.kt)("inlineCode",{parentName:"a"},"route")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"service"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-enable-on-the-consumer"},"How to enable on the ",(0,r.kt)("inlineCode",{parentName:"a"},"consumer"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disable-plugin"},"Disable Plugin"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'limit request rate using the "leaky bucket" method.'),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rate"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"rate > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"the specified request rate (number per second) threshold. Requests exceeding this rate (and below ",(0,r.kt)("inlineCode",{parentName:"td"},"burst"),") will get delayed to conform to the rate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"burst"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of excessive requests per second allowed to be delayed. Requests exceeding this hard limit will get rejected immediately.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"var"'),(0,r.kt)("td",{parentName:"tr",align:null},'["var", "var_combination"]'),(0,r.kt)("td",{parentName:"tr",align:null},"the type of key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"the user specified key to limit the rate. If the ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type"),' is "var", the key will be treated as a name of variable, like "remote_addr" or "consumer_name". If the ',(0,r.kt)("inlineCode",{parentName:"td"},"key_type"),' is "var_combination", the key will be a combination of variables, like "$remote_addr $consumer_name". If the value of the key is empty, ',(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr")," will be set as the default key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"503"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"The HTTP status code returned when the request exceeds the threshold is rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,r.kt)("td",{parentName:"tr",align:null},"The response body returned when the request exceeds the threshold is rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodelay"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If nodelay flag is true, bursted requests will not get delayed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable plugin degradation when the limit-req function is temporarily unavailable. Allow requests to continue when the value is set to true, default false.")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"how-to-enable-on-the-route-or-service"},"How to enable on the ",(0,r.kt)("inlineCode",{parentName:"h3"},"route")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"service")),(0,r.kt)("p",null,"Take ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," as an example (the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," is the same method), enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin on the specified route when setting ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Take ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," as an example (the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," is the same method), enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin on the specified route when setting ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"var_combination")," ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-req": {\n            "rate": 1,\n            "burst": 2,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You also can complete the above operation through the web interface, first add a route, then add limit-req plugin:\n",(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.12/docs/assets/images/plugin/limit-req-1.png",alt:"add plugin"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Test Plugin")),(0,r.kt)("p",null,"The above configuration limits the request rate to 1 per second. If it is greater than 1 and less than 3, the delay will be added. If the rate exceeds 3, it will be rejected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,r.kt)("p",null,"When you exceed, you will receive a response header with a 503 return code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,r.kt)("p",null,"At the same time, you set the property ",(0,r.kt)("inlineCode",{parentName:"p"},"rejected_msg")," to ",(0,r.kt)("inlineCode",{parentName:"p"},'"Requests are too frequent, please try again later."')," , when you exceed, you will receive a response body like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,r.kt)("p",null,"This means that the limit req plugin is in effect."),(0,r.kt)("h3",{id:"how-to-enable-on-the-consumer"},"How to enable on the ",(0,r.kt)("inlineCode",{parentName:"h3"},"consumer")),(0,r.kt)("p",null,"To enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin on the consumer, it needs to be used together with the authorization plugin. Here, the key-auth authorization plugin is taken as an example."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bind the ",(0,r.kt)("inlineCode",{parentName:"li"},"limit-req")," plugin to the consumer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        },\n        "limit-req": {\n            "rate": 1,\n            "burst": 1,\n            "rejected_code": 403,\n            "key": "consumer_name"\n        }\n    }\n}\'\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"route")," and enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"key-auth")," plugin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Test Plugin")),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"rate + burst")," is not exceeded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html -H 'apikey: auth-jack'\nHTTP/1.1 200 OK\n......\n")),(0,r.kt)("p",null,"When the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"rate + burst")," is exceeded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html -H 'apikey: auth-jack'\nHTTP/1.1 403 Forbidden\n.....\n<html>\n<head><title>403 Forbidden</title></head>\n<body>\n<center><h1>403 Forbidden</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,r.kt)("p",null,"Explains that the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin tied to ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer")," has taken effect."),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"When you want to disable the limit req plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-req")," plugin on ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "consumer_jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-jack"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"The limit req plugin has been disabled now. It works for other plugins."))}d.isMDXComponent=!0}}]);