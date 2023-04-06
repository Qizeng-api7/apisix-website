"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[62948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=l,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63760:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={title:"splunk-hec-logging",keywords:["APISIX","Plugin","Splunk HTTP Event Collector","splunk-hec-logging"],description:"This document contains information about the Apache APISIX splunk-hec-logging Plugin."},r=void 0,o={unversionedId:"plugins/splunk-hec-logging",id:"version-3.2/plugins/splunk-hec-logging",isDocsHomePage:!1,title:"splunk-hec-logging",description:"This document contains information about the Apache APISIX splunk-hec-logging Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.2/plugins/splunk-hec-logging.md",sourceDirName:"plugins",slug:"/plugins/splunk-hec-logging",permalink:"/docs/apisix/plugins/splunk-hec-logging",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.2/docs/en/latest/plugins/splunk-hec-logging.md",tags:[],version:"3.2",frontMatter:{title:"splunk-hec-logging",keywords:["APISIX","Plugin","Splunk HTTP Event Collector","splunk-hec-logging"],description:"This document contains information about the Apache APISIX splunk-hec-logging Plugin."},sidebar:"version-3.2/docs",previous:{title:"google-cloud-logging",permalink:"/docs/apisix/plugins/google-cloud-logging"},next:{title:"file-logger",permalink:"/docs/apisix/plugins/file-logger"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[{value:"Full configuration",id:"full-configuration",children:[]},{value:"Minimal configuration",id:"minimal-configuration",children:[]}]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," Plugin is used to forward logs to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/8.2.6/Data/UsetheHTTPEventCollector"},"Splunk HTTP Event Collector (HEC)")," for analysis and storage."),(0,l.kt)("p",null,"When the Plugin is enabled, APISIX will serialize the request context information to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/latest/Data/FormateventsforHTTPEventCollector#Event_metadata"},"Splunk Event Data format")," and submit it to the batch queue. When the maximum batch size is exceeded, the data in the queue is pushed to Splunk HEC. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"batch processor")," for more details."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC endpoint configurations.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.uri"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC event collector API endpoint.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.token"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC authentication token.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.channel"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC send data channel identifier. Read more: ",(0,l.kt)("a",{parentName:"td",href:"https://docs.splunk.com/Documentation/Splunk/8.2.3/Data/AboutHECIDXAck"},"About HTTP Event Collector Indexer Acknowledgment"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Splunk HEC send data timeout in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," enables SSL verification as per ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"OpenResty docs"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,l.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX")," or ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,l.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,l.kt)("p",null,"This Plugin supports using batch processors to aggregate and process entries (logs/data) in a batch. This avoids the need for frequently submitting the data. The batch processor submits data every ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"1000"),". See ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor#configuration"},"Batch Processor")," for more information or setting your custom configuration."),(0,l.kt)("h2",{id:"metadata"},"Metadata"),(0,l.kt)("p",null,"You can also set the format of the logs by configuring the Plugin metadata. The following configurations are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,l.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX")," or ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,l.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Configuring the Plugin metadata is global in scope. This means that it will take effect on all Routes and Services which use the ",(0,l.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," Plugin."))),(0,l.kt)("p",null,"The example below shows how you can configure through the Admin API:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/splunk-hec-logging -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,l.kt)("p",null,"With this configuration, your logs would be formatted as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[{"time":1673976669.269,"source":"apache-apisix-splunk-hec-logging","event":{"host":"localhost","client_ip":"127.0.0.1","@timestamp":"2023-01-09T14:47:25+08:00","route_id":"1"},"host":"DESKTOP-2022Q8F-wsl","sourcetype":"_json"}]\n')),(0,l.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,l.kt)("h3",{id:"full-configuration"},"Full configuration"),(0,l.kt)("p",null,"The example below shows a complete configuration of the Plugin on a specific Route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C",\n                "channel":"FE0ECFAD-13D5-401B-847D-77833BD77131",\n                "timeout":60\n            },\n            "buffer_duration":60,\n            "max_retry_count":0,\n            "retry_delay":1,\n            "inactive_timeout":2,\n            "batch_max_size":10\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,l.kt)("h3",{id:"minimal-configuration"},"Minimal configuration"),(0,l.kt)("p",null,"The example below shows a bare minimum configuration of the Plugin on a Route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "splunk-hec-logging":{\n            "endpoint":{\n                "uri":"http://127.0.0.1:8088/services/collector",\n                "token":"BD274822-96AA-4DA6-90EC-18940FB2414C"\n            }\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/splunk.do"\n}\'\n')),(0,l.kt)("h2",{id:"example-usage"},"Example usage"),(0,l.kt)("p",null,"Once you have configured the Route to use the Plugin, when you make a request to APISIX, it will be logged in your Splunk server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/splunk.do?q=hello\n")),(0,l.kt)("p",null,"You should be able to login and search these logs from your Splunk dashboard:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.2/docs/assets/images/plugin/splunk-hec-admin-en.png",alt:"splunk hec search view"})),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"To disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"splunk-hec-logging")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);