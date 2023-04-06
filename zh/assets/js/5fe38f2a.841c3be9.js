"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[33539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(a),m=r,k=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},34962:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Apache Kafka",keywords:["APISIX","PubSub","Kafka"],description:"This document contains information about the Apache APISIX kafka pubsub scenario."},i=void 0,s={unversionedId:"pubsub/kafka",id:"version-2.14/pubsub/kafka",isDocsHomePage:!1,title:"Apache Kafka",description:"This document contains information about the Apache APISIX kafka pubsub scenario.",source:"@site/docs-apisix_versioned_docs/version-2.14/pubsub/kafka.md",sourceDirName:"pubsub",slug:"/pubsub/kafka",permalink:"/zh/docs/apisix/2.14/pubsub/kafka",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.14/docs/zh/latest/pubsub/kafka.md",tags:[],version:"2.14",frontMatter:{title:"Apache Kafka",keywords:["APISIX","PubSub","Kafka"],description:"This document contains information about the Apache APISIX kafka pubsub scenario."},sidebar:"version-2.14/docs",previous:{title:"PubSub",permalink:"/zh/docs/apisix/2.14/pubsub"},next:{title:"redis",permalink:"/zh/docs/apisix/2.14/xrpc/redis"}},p=[{value:"Connect to Apache Kafka",id:"connect-to-apache-kafka",children:[{value:"Limitations",id:"limitations",children:[]},{value:"Prepare",id:"prepare",children:[]},{value:"How to use",id:"how-to-use",children:[]}]}],l={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"connect-to-apache-kafka"},"Connect to Apache Kafka"),(0,r.kt)("p",null,"Connecting to Apache Kafka in Apache APISIX is very simple."),(0,r.kt)("p",null,"Currently, we provide a simpler way to integrate by combining two APIs, ListOffsets and Fetch, to quickly implement the ability to pull Kafka messages. Still, they do not support Apache Kafka's consumer group feature for now and cannot be managed for offsets by Apache Kafka."),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Offsets need to be managed manually")),(0,r.kt)("p",null,"They can be stored by a custom backend service or obtained via the list_offset command before starting to fetch the message, which can use timestamp to get the starting offset, or to get the initial and end offsets."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unsupported batch data acquisition")),(0,r.kt)("p",null,"A single instruction can only obtain the data of a Topic Partition, does not support batch data acquisition through a single instruction"),(0,r.kt)("h3",{id:"prepare"},"Prepare"),(0,r.kt)("p",null,"First, it is necessary to compile the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/include/apisix/model/pubsub.proto"},"communication protocol")," as a language-specific SDK using the ",(0,r.kt)("inlineCode",{parentName:"p"},"protoc"),", which provides the command and response definitions to connect to Kafka via APISIX using the WebSocket."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," field in the protocol is used to associate the request with the response, they will correspond one to one, the client can manage it in the way they want, APISIX will not modify it, only pass it back to the client through the response body."),(0,r.kt)("p",null,"The following commands are currently used by Apache Kafka connect\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CmdKafkaFetch"),(0,r.kt)("li",{parentName:"ul"},"CmdKafkaListOffset")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"CmdKafkaListOffset")," command supports the following value:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unix timestamp"),": Offset of the first message after the specified timestamp"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-1"),"\uff1aOffset of the last message of the current Partition"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-2"),"\uff1aOffset of the first message of current Partition")),(0,r.kt)("p",{parentName:"blockquote"},"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/protocol.html#The_Messages_ListOffsets"},"Apache Kafka Protocol Documentation"))),(0,r.kt)("p",null,"Possible response body: When an error occurs, ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorResp")," will be returned, which includes the error string; the rest of the response will be returned after the execution of the particular command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ErrorResp"),(0,r.kt)("li",{parentName:"ul"},"KafkaFetchResp"),(0,r.kt)("li",{parentName:"ul"},"KafkaListOffsetResp")),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)("h4",{id:"create-route"},"Create route"),(0,r.kt)("p",null,"Create a route, set the upstream ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka"),", and configure ",(0,r.kt)("inlineCode",{parentName:"p"},"nodes")," to be the address of the Kafka broker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9080/apisix/admin/routes/kafka\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/kafka",\n    "upstream": {\n        "nodes": {\n            "kafka-server1:9092": 1,\n            "kafka-server2:9092": 1,\n            "kafka-server3:9092": 1\n        },\n        "type": "none",\n        "scheme": "kafka"\n    }\n}\'\n')),(0,r.kt)("p",null,"After configuring the route, you can use this feature."))}c.isMDXComponent=!0}}]);