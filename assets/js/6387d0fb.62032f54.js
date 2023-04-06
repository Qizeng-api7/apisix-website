"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[80881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||l;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3983:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"sls-logger",keywords:["APISIX","API Gateway","Plugin","SLS Logger","Alibaba Cloud Log Service"],description:"This document contains information about the Apache APISIX sls-logger Plugin."},i=void 0,o={unversionedId:"plugins/sls-logger",id:"version-3.2/plugins/sls-logger",isDocsHomePage:!1,title:"sls-logger",description:"This document contains information about the Apache APISIX sls-logger Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.2/plugins/sls-logger.md",sourceDirName:"plugins",slug:"/plugins/sls-logger",permalink:"/docs/apisix/plugins/sls-logger",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.2/docs/en/latest/plugins/sls-logger.md",tags:[],version:"3.2",frontMatter:{title:"sls-logger",keywords:["APISIX","API Gateway","Plugin","SLS Logger","Alibaba Cloud Log Service"],description:"This document contains information about the Apache APISIX sls-logger Plugin."},sidebar:"version-3.2/docs",previous:{title:"error-log-logger",permalink:"/docs/apisix/plugins/error-log-logger"},next:{title:"google-cloud-logging",permalink:"/docs/apisix/plugins/google-cloud-logging"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sls-logger")," Plugin is used to push logs to ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/log-service/latest/use-the-syslog-protocol-to-upload-logs"},"Alibaba Cloud log Service")," using ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424"},"RF5424"),"."),(0,r.kt)("p",null,"It might take some time to receive the log data. It will be automatically sent after the timer function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"batch processor")," expires."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"IP address or the hostname of the TCP server. See ",(0,r.kt)("a",{parentName:"td",href:"https://www.alibabacloud.com/help/en/log-service/latest/endpoints"},"Alibaba Cloud log service documentation")," for details. Use IP address instead of domain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Target upstream port. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"10009"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout for the upstream to send data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX")," or ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Project name in Alibaba Cloud log service. Create SLS before using this Plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logstore"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"logstore name in Ali Cloud log service. Create SLS before using this Plugin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key_id"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"AccessKey ID in Alibaba Cloud. See ",(0,r.kt)("a",{parentName:"td",href:"https://www.alibabacloud.com/help/en/log-service/latest/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service"},"Authorization")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key_secret"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"AccessKey Secret in Alibaba Cloud. See ",(0,r.kt)("a",{parentName:"td",href:"https://www.alibabacloud.com/help/en/log-service/latest/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service"},"Authorization")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", includes the request body in the log.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for the batch processor.")))),(0,r.kt)("p",null,"NOTE: ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"access_key_secret"}')," is also defined in the schema, which means that the field will be stored encrypted in etcd. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugin-develop#encrypted-storage-fields"},"encrypted storage fields"),"."),(0,r.kt)("p",null,"This Plugin supports using batch processors to aggregate and process entries (logs/data) in a batch. This avoids the need for frequently submitting the data. The batch processor submits data every ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor#configuration"},"Batch Processor")," for more information or setting your custom configuration."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"You can also set the format of the logs by configuring the Plugin metadata. The following configurations are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,r.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX")," or ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Configuring the Plugin metadata is global in scope. This means that it will take effect on all Routes and Services which use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sls-logger")," Plugin."))),(0,r.kt)("p",null,"The example below shows how you can configure through the Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/sls-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"With this configuration, your logs would be formatted as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"The example below shows how you can configure the Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "sls-logger": {\n            "host": "100.100.99.135",\n            "port": 10009,\n            "project": "your_project",\n            "logstore": "your_logstore",\n            "access_key_id": "your_access_key_id",\n            "access_key_secret": "your_access_key_secret",\n            "timeout": 30000\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Now, if you make a request to APISIX, it will be logged in your Ali Cloud log server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",null,"Now if you check your Ali Cloud log server, you will be able to see the logs:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.2/docs/assets/images/plugin/sls-logger-1.png",alt:"sls logger view",title:"sls logger view"})),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"sls-logger")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);