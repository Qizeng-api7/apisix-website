"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[22690],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=u(n),s=l,k=m["".concat(o,".").concat(s)]||m[s]||g[s]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99950:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={title:"syslog",keywords:["APISIX","API \u7f51\u5173","Plugin","syslog"],description:"API \u7f51\u5173 Apache APISIX syslog \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u63a8\u9001\u5230 Syslog \u670d\u52a1\u5668\u3002"},i=void 0,p={unversionedId:"plugins/syslog",id:"plugins/syslog",isDocsHomePage:!1,title:"syslog",description:"API \u7f51\u5173 Apache APISIX syslog \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u63a8\u9001\u5230 Syslog \u670d\u52a1\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/syslog.md",sourceDirName:"plugins",slug:"/plugins/syslog",permalink:"/zh/docs/apisix/next/plugins/syslog",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/syslog.md",tags:[],version:"current",frontMatter:{title:"syslog",keywords:["APISIX","API \u7f51\u5173","Plugin","syslog"],description:"API \u7f51\u5173 Apache APISIX syslog \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u63a8\u9001\u5230 Syslog \u670d\u52a1\u5668\u3002"},sidebar:"docs",previous:{title:"clickhouse-logger",permalink:"/zh/docs/apisix/next/plugins/clickhouse-logger"},next:{title:"log-rotate",permalink:"/zh/docs/apisix/next/plugins/log-rotate"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:o};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"syslog")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u63a8\u9001\u5230 Syslog \u670d\u52a1\u5668\u3002"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u8fd8\u5b9e\u73b0\u4e86\u5c06\u65e5\u5fd7\u6570\u636e\u4ee5 JSON \u683c\u5f0f\u53d1\u9001\u5230 Syslog \u670d\u52a1\u7684\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"IP \u5730\u5740\u6216\u4e3b\u673a\u540d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u4e0a\u6e38\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"sys logger"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"syslog \u670d\u52a1\u5668\u7684\u6807\u8bc6\u7b26\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u53d1\u9001\u6570\u636e\u8d85\u65f6\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u6267\u884c SSL \u9a8c\u8bc1\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flush_limit"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"4096"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u7f13\u51b2\u7684\u6d88\u606f\u7684\u5927\u5c0f\u52a0\u4e0a\u5f53\u524d\u6d88\u606f\u7684\u5927\u5c0f\u8fbe\u5230\uff08> =\uff09\u6b64\u9650\u5236\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\uff0c\u5219\u7f13\u51b2\u7684\u65e5\u5fd7\u6d88\u606f\u5c06\u88ab\u5199\u5165\u65e5\u5fd7\u670d\u52a1\u5668\uff0c\u9ed8\u8ba4\u4e3a 4096\uff084KB\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drop_limit"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"1048576"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u7f13\u51b2\u7684\u6d88\u606f\u7684\u5927\u5c0f\u52a0\u4e0a\u5f53\u524d\u6d88\u606f\u7684\u5927\u5c0f\u5927\u4e8e\u6b64\u9650\u5236\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\uff0c\u5219\u7531\u4e8e\u7f13\u51b2\u533a\u5927\u5c0f\u6709\u9650\uff0c\u5f53\u524d\u7684\u65e5\u5fd7\u6d88\u606f\u5c06\u88ab\u4e22\u5f03\uff0c\u9ed8\u8ba4\u4e3a 1048576\uff081MB\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sock_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"tcp"'),(0,l.kt)("td",{parentName:"tr",align:null},'["tcp","udp"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u4f20\u8f93\u5c42\u7684 IP \u534f\u8bae\u7c7b\u578b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[1, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5230\u65e5\u5fd7\u670d\u52a1\u5668\u5931\u8d25\u6216\u5c06\u65e5\u5fd7\u6d88\u606f\u53d1\u9001\u5230\u65e5\u5fd7\u670d\u52a1\u5668\u5931\u8d25\u540e\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[0, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91cd\u8bd5\u8fde\u63a5\u5230\u65e5\u5fd7\u670d\u52a1\u5668\u6216\u91cd\u8bd5\u5411\u65e5\u5fd7\u670d\u52a1\u5668\u53d1\u9001\u65e5\u5fd7\u6d88\u606f\u4e4b\u524d\u7684\u65f6\u95f4\u5ef6\u8fdf\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool_size"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[5, ...]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sock\uff1akeepalive")," \u4f7f\u7528\u7684 Keepalive \u6c60\u5927\u5c0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/apisix/next/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"NGINX \u5185\u7f6e\u53d8\u91cf"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u5305\u62ec\u8bf7\u6c42\u4f53\u3002")))),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u6bcf ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor"),"\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "syslog": {\n            "host" : "127.0.0.1",\n            "port" : 5044,\n            "flush_limit" : 1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5411 APISIX \u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);