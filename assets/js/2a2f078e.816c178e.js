"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[64271],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),g=p(n),m=r,c=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16603:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"http-logger",keywords:["Apache APISIX","API Gateway","Plugin","HTTP Logger"],description:"This document contains information about the Apache APISIX http-logger Plugin. Using this Plugin, you can push APISIX log data to HTTP or HTTPS servers."},i=void 0,o={unversionedId:"plugins/http-logger",id:"plugins/http-logger",isDocsHomePage:!1,title:"http-logger",description:"This document contains information about the Apache APISIX http-logger Plugin. Using this Plugin, you can push APISIX log data to HTTP or HTTPS servers.",source:"@site/docs/apisix/plugins/http-logger.md",sourceDirName:"plugins",slug:"/plugins/http-logger",permalink:"/docs/apisix/next/plugins/http-logger",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/http-logger.md",tags:[],version:"current",frontMatter:{title:"http-logger",keywords:["Apache APISIX","API Gateway","Plugin","HTTP Logger"],description:"This document contains information about the Apache APISIX http-logger Plugin. Using this Plugin, you can push APISIX log data to HTTP or HTTPS servers."},sidebar:"docs",previous:{title:"datadog",permalink:"/docs/apisix/next/plugins/datadog"},next:{title:"skywalking-logger",permalink:"/docs/apisix/next/plugins/skywalking-logger"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"http-logger")," Plugin is used to push log data requests to HTTP/HTTPS servers."),(0,r.kt)("p",null,"This will allow the ability to send log data requests as JSON objects to monitoring tools and other HTTP servers."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"URI of the HTTP/HTTPS server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth_header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization headers if required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Time to keep the connection alive for after sending a request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/next/apisix-variable"},"APISIX")," or ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," includes the request body in the log. If the request body is too big to be kept in the memory, it can't be logged due to Nginx's limitations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," includes the response body in the log.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When the ",(0,r.kt)("inlineCode",{parentName:"td"},"include_resp_body")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", use this to filter based on ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),". If present, only logs the response if the expression evaluates to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"concat_method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"json"'),(0,r.kt)("td",{parentName:"tr",align:null},'["json", "new_line"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Sets how to concatenate logs. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"json"),", uses ",(0,r.kt)("inlineCode",{parentName:"td"},"json.encode")," for all pending logs and when set to ",(0,r.kt)("inlineCode",{parentName:"td"},"new_line"),", also uses ",(0,r.kt)("inlineCode",{parentName:"td"},"json.encode")," but uses the newline (",(0,r.kt)("inlineCode",{parentName:"td"},"\\n"),") to concatenate lines.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," verifies the SSL certificate.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This Plugin supports using batch processors to aggregate and process entries (logs/data) in a batch. This avoids the need for frequently submitting the data. The batch processor submits data every ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/next/batch-processor#configuration"},"Batch Processor")," for more information or setting your custom configuration."))),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"You can also set the format of the logs by configuring the Plugin metadata. The following configurations are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,r.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/next/apisix-variable"},"APISIX")," or ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Configuring the Plugin metadata is global in scope. This means that it will take effect on all Routes and Services which use the ",(0,r.kt)("inlineCode",{parentName:"p"},"http-logger")," Plugin."))),(0,r.kt)("p",null,"The example below shows how you can configure through the Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/http-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"With this configuration, your logs would be formatted as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"The example below shows how you can enable the Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "http-logger": {\n                "uri": "http://mockbin.org/bin/:ID"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"As an example the ",(0,r.kt)("a",{parentName:"p",href:"http://mockbin.org/bin/create"},"mockbin")," server is used for mocking an HTTP server to see the logs produced by APISIX."),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Now, if you make a request to APISIX, it will be logged in your mockbin server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable this Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);