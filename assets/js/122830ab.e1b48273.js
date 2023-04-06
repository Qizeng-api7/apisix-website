"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9126:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"xRPC"},i=void 0,l={unversionedId:"xrpc",id:"version-3.2/xrpc",isDocsHomePage:!1,title:"xRPC",description:"APISIX supports proxy TCP protocols, but there are times when a pure TCP protocol proxy is not enough. It would help if you had an application-specific proxy, such as Redis Proxy, Kafka Proxy, etc. In addition, some features must be coded and decoded for that protocol before they can be implemented.",source:"@site/docs-apisix_versioned_docs/version-3.2/xrpc.md",sourceDirName:".",slug:"/xrpc",permalink:"/docs/apisix/xrpc",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.2/docs/en/latest/xrpc.md",tags:[],version:"3.2",frontMatter:{title:"xRPC"},sidebar:"version-3.2/docs",previous:{title:"redis",permalink:"/docs/apisix/xrpc/redis"},next:{title:"Router radixtree",permalink:"/docs/apisix/router-radixtree"}},s=[{value:"What is xRPC",id:"what-is-xrpc",children:[]},{value:"How to use",id:"how-to-use",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Scenarios",id:"scenarios",children:[{value:"Fault injection",id:"fault-injection",children:[]},{value:"Dynamic Routing",id:"dynamic-routing",children:[]},{value:"Log Reporting",id:"log-reporting",children:[]},{value:"Dynamic metrics",id:"dynamic-metrics",children:[]}]},{value:"How to write your own protocol",id:"how-to-write-your-own-protocol",children:[]}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-xrpc"},"What is xRPC"),(0,o.kt)("p",null,"APISIX supports proxy TCP protocols, but there are times when a pure TCP protocol proxy is not enough. It would help if you had an application-specific proxy, such as Redis Proxy, Kafka Proxy, etc. In addition, some features must be coded and decoded for that protocol before they can be implemented."),(0,o.kt)("p",null,"Therefore, Apache APISIX implements an L4 protocol extension framework called xRPC that allows developers to customize application-specific protocols. Based on xRPC, developers can codec requests and responses through Lua code and then implement fault injection, log reporting, dynamic routing, and other functions based on understanding the protocol content."),(0,o.kt)("p",null,"Based on the xRPC framework, APISIX can provide a proxy implementation of several major application protocols. In addition, users can also support their own private TCP-based application protocols based on this framework, giving them precise granularity and higher-level 7-layer control similar to HTTP protocol proxies."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Currently, the steps for users to use xRPC are relatively simple and can be handled quickly in just two steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, enable the corresponding protocol in ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"xrpc:\n  protocols:\n    - name: redis\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Then specify the protocol in the relevant ",(0,o.kt)("inlineCode",{parentName:"li"},"stream_routes"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "protocol": {\n        "name": "redis",\n        "conf": {\n            "faults": [\n                { "delay": 5, "key": "bogus_key", "commands":["GET", "MGET"]}\n            ]\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The TCP connection that hits that ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_route")," is then handled according to that protocol."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"True"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"the protocol name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"conf"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"the application-specific protocol configuration")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"superior_id"),(0,o.kt)("td",{parentName:"tr",align:null},"ID"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"the ID of the superior stream route")))),(0,o.kt)("h2",{id:"scenarios"},"Scenarios"),(0,o.kt)("h3",{id:"fault-injection"},"Fault injection"),(0,o.kt)("p",null,"Taking Redis protocol as an example, after decoding the RESP protocol of Redis, we can know the command and parameters of the current request and then get the corresponding content according to the configuration, encode it using RESP protocol, and return it to the client."),(0,o.kt)("p",null,"Suppose the user uses the following routing configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "protocol": {\n        "name": "redis",\n        "conf": {\n            "faults": [\n                { "delay": 5, "key": "bogus_key", "commands":["GET", "MGET"]}\n            ]\n        }\n    }\n}\n')),(0,o.kt)("p",null,'Then when the command is "GET" or "MGET", and the operation key contains "bogus_key", it will get "delay" according to the configuration: "5" parameter, and the corresponding operation will be performed with a delay of 5 seconds.'),(0,o.kt)("p",null,"Since xRPC requires developers to codec the protocol when customizing it, the same operation can be applied to other protocols."),(0,o.kt)("h3",{id:"dynamic-routing"},"Dynamic Routing"),(0,o.kt)("p",null,"In the process of proxy RPC protocol, there are often different RPC calls that need to be forwarded to different upstream requirements. Therefore, the xRPC framework has built-in support for dynamic routing."),(0,o.kt)("p",null,"To solve this problem, the concept of superior and subordinate is used in xRPC routing, as shown in the following two examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# /stream_routes/1\n{\n    "sni": "a.test.com",\n    "protocol": {\n        "name": "xx",\n        "conf": {\n            ...\n        }\n    },\n    "upstream_id": "1"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# /stream_routes/2\n{\n    "protocol": {\n        "name": "xx",\n        "superior_id": "1",\n        "conf": {\n            ...\n        }\n    },\n    "upstream_id": "2"\n}\n')),(0,o.kt)("p",null,"One specifies the ",(0,o.kt)("inlineCode",{parentName:"p"},"superior_id"),", whose corresponding value is the ID of another route; the other specifies that the route with the ",(0,o.kt)("inlineCode",{parentName:"p"},"superior_id")," is a subordinate route, subordinate to the one with the ",(0,o.kt)("inlineCode",{parentName:"p"},"superior_id"),". Only the superior route is involved in matching at the entry point. The subordinate route is then matched by the specific protocol when the request is decoded."),(0,o.kt)("p",null,"For example, for the Dubbo RPC protocol, the subordinate route is matched based on the service_name and other parameters configured in the route and the actual service_name brought in the request. If the match is successful, the configuration above the subordinate route is used, otherwise the configuration of the superior route is still used. In the above example, if the match for route 2 is successful, it will be forwarded to upstream 2; otherwise, it will still be forwarded to upstream 1."),(0,o.kt)("h3",{id:"log-reporting"},"Log Reporting"),(0,o.kt)("p",null,"xRPC supports logging-related functions. You can use this feature to filter requests that require attention, such as high latency, excessive transfer content, etc."),(0,o.kt)("p",null,"Each logger item configuration parameter will contain"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"name: the Logger plugin name,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"filter: the prerequisites for the execution of the logger plugin(e.g., request processing time exceeding a given value),")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"conf: the configuration of the logger plugin itself."),(0,o.kt)("p",{parentName:"li"},"The following configuration is an example:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "protocol": {\n        "name": "redis",\n        "logger": {\n            {\n                "name": "syslog",\n                "filter": [\n                    ["rpc_time", ">=", 0.01]\n                ],\n                "conf": {\n                    "host": "127.0.0.1",\n                    "port": 8125,\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"This configuration means that when the ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc_time")," is greater than 0.01 seconds, xPRC reports the request log to the log server via the ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," plugin. ",(0,o.kt)("inlineCode",{parentName:"p"},"conf")," is the configuration of the logging server required by the ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," plugin."),(0,o.kt)("p",null,"Unlike standard TCP proxies, which only execute a logger when the connection is closed, xRPC's executed logger at the end of each 'request'."),(0,o.kt)("p",null,"The protocol itself defines the granularity of the specific request, and the xRPC extension code implements the request's granularity."),(0,o.kt)("p",null,"For example, in the Redis protocol, the execution of a command is considered a request."),(0,o.kt)("h3",{id:"dynamic-metrics"},"Dynamic metrics"),(0,o.kt)("p",null,"xRPC also supports gathering metrics on the fly and exposing them via Prometheus."),(0,o.kt)("p",null,"To know how to enable Prometheus metrics for TCP and collect them, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/prometheus"},"prometheus"),"."),(0,o.kt)("p",null,"To get the protocol-specific metrics, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure the Prometheus is enabled for TCP"),(0,o.kt)("li",{parentName:"ol"},"Add the metric field to the specific route and ensure the ",(0,o.kt)("inlineCode",{parentName:"li"},"enable")," is true:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "protocol": {\n        "name": "redis",\n        "metric": {\n            "enable": true\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Different protocols will have different metrics. Please refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Metrics")," section of their own documentation."),(0,o.kt)("h2",{id:"how-to-write-your-own-protocol"},"How to write your own protocol"),(0,o.kt)("p",null,"Assuming that your protocol is named ",(0,o.kt)("inlineCode",{parentName:"p"},"my_proto"),", you need to create a directory that can be introduced by ",(0,o.kt)("inlineCode",{parentName:"p"},'require "apisix.stream.xrpc.protocols.my_proto"'),".\nInside this directory you need to have two files, ",(0,o.kt)("inlineCode",{parentName:"p"},"init.lua"),", which implements the methods required by the xRPC framework, and ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.lua"),", which implements the schema checks for the protocol configuration."),(0,o.kt)("p",null,"For a concrete implementation, you can refer to the existing protocols at:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/tree/master/apisix/stream/xrpc/protocols"},"https://github.com/apache/apisix/tree/master/apisix/stream/xrpc/protocols")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/tree/master/t/xrpc/apisix/stream/xrpc/protocols"},"https://github.com/apache/apisix/tree/master/t/xrpc/apisix/stream/xrpc/protocols"))),(0,o.kt)("p",null,"To know what methods are required to be implemented and how the xRPC framework works, please refer to:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/apisix/stream/xrpc/runner.lua"},"https://github.com/apache/apisix/tree/master/apisix/stream/xrpc/runner.lua")))}c.isMDXComponent=!0}}]);