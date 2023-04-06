"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[53334],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:e},o),{},{components:n})):a.createElement(g,i({ref:e},o))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88170:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"batch-requests",keywords:["APISIX","Plugin","Batch Requests"],description:"This document contains information about the Apache APISIX batch-request Plugin."},i=void 0,p={unversionedId:"plugins/batch-requests",id:"version-3.2/plugins/batch-requests",isDocsHomePage:!1,title:"batch-requests",description:"This document contains information about the Apache APISIX batch-request Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.2/plugins/batch-requests.md",sourceDirName:"plugins",slug:"/plugins/batch-requests",permalink:"/docs/apisix/plugins/batch-requests",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.2/docs/en/latest/plugins/batch-requests.md",tags:[],version:"3.2",frontMatter:{title:"batch-requests",keywords:["APISIX","Plugin","Batch Requests"],description:"This document contains information about the Apache APISIX batch-request Plugin."},sidebar:"version-3.2/docs",previous:{title:"Secret",permalink:"/docs/apisix/terminology/secret"},next:{title:"redirect",permalink:"/docs/apisix/plugins/redirect"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Request and response format",id:"request-and-response-format",children:[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}]},{value:"Specifying a custom URI",id:"specifying-a-custom-uri",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:s};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"batch-requests")," plugin accepts multiple requests, sends them from APISIX via ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_pipelining"},"HTTP pipelining"),", and returns an aggregated response to the client."),(0,r.kt)("p",null,"This improves the performance significantly in cases where the client needs to access multiple APIs."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The HTTP headers for the outer batch request (except for ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-")," headers like ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type"),") apply to every request in the batch."),(0,r.kt)("p",{parentName:"div"},"If the same HTTP header is specified in both the outer request and on an individual call, the header of the individual call takes precedence."))),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"None."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"This plugin adds ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," as an endpoint."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You may need to use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/public-api"},"public-api")," plugin to expose this endpoint."))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"You can enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch-requests")," Plugin by adding it to your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - ...\n  - batch-requests\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"By default, the maximum body size that can be sent to ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," can't be larger than 1 MiB. You can change this configuration of the Plugin through the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix/admin/plugin_metadata/batch-requests"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/batch-requests -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '\n{\n    \"max_body_size\": 4194304\n}'\n")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_body_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"1048576"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, ...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum size of the request body in bytes.")))),(0,r.kt)("h2",{id:"request-and-response-format"},"Request and response format"),(0,r.kt)("p",null,"This plugin will create an API endpoint in APISIX to handle batch requests."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Query string for the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Headers for all the requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout in ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},"array[",(0,r.kt)("a",{parentName:"td",href:"#httprequest"},"HttpRequest"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Details of the request.")))),(0,r.kt)("h4",{id:"httprequest"},"HttpRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"[1.0, 1.1]"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS", "CONNECT", "TRACE"]'),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Query string for the request. If set, overrides the value of the global query string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Headers for the request. If set, overrides the value of the global query string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the HTTP request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Body of the HTTP request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Set to verify if the SSL certs matches the hostname.")))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"The response is an array of ",(0,r.kt)("a",{parentName:"p",href:"#httpresponse"},"HttpResponses"),"."),(0,r.kt)("h4",{id:"httpresponse"},"HttpResponse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP status code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reason"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP reason-phrase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP response headers.")))),(0,r.kt)("h2",{id:"specifying-a-custom-uri"},"Specifying a custom URI"),(0,r.kt)("p",null,"You can specify a custom URI with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/public-api"},"public-api")," Plugin."),(0,r.kt)("p",null,"You can set the URI you want when creating the Route and change the configuration of the public-api Plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/br -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/batch-requests",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/batch-requests"\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"First, you need to setup a Route to the batch request API. We will use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/public-api"},"public-api")," Plugin for this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/br -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/batch-requests",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,r.kt)("p",null,"Now you can make a request to the batch request API (",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://127.0.0.1:9080/apisix/batch-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "headers": {\n        "Content-Type": "application/json",\n        "admin-jwt":"xxxx"\n    },\n    "timeout": 500,\n    "pipeline": [\n        {\n            "method": "POST",\n            "path": "/community.GiftSrv/GetGifts",\n            "body": "test"\n        },\n        {\n            "method": "POST",\n            "path": "/community.GiftSrv/GetGifts",\n            "body": "test2"\n        }\n    ]\n}\'\n')),(0,r.kt)("p",null,"This will give a response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "status": 200,\n    "reason": "OK",\n    "body": "{\\"ret\\":500,\\"msg\\":\\"error\\",\\"game_info\\":null,\\"gift\\":[],\\"to_gets\\":0,\\"get_all_msg\\":\\"\\"}",\n    "headers": {\n      "Connection": "keep-alive",\n      "Date": "Sat, 11 Apr 2020 17:53:20 GMT",\n      "Content-Type": "application/json",\n      "Content-Length": "81",\n      "Server": "APISIX web server"\n    }\n  },\n  {\n    "status": 200,\n    "reason": "OK",\n    "body": "{\\"ret\\":500,\\"msg\\":\\"error\\",\\"game_info\\":null,\\"gift\\":[],\\"to_gets\\":0,\\"get_all_msg\\":\\"\\"}",\n    "headers": {\n      "Connection": "keep-alive",\n      "Date": "Sat, 11 Apr 2020 17:53:20 GMT",\n      "Content-Type": "application/json",\n      "Content-Length": "81",\n      "Server": "APISIX web server"\n    }\n  }\n]\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"You can remove ",(0,r.kt)("inlineCode",{parentName:"p"},"batch-requests")," from your list of Plugins in your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),")."))}o.isMDXComponent=!0}}]);