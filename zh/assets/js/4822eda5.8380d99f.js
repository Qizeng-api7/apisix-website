"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56463],{3905:(t,e,a)=>{a.d(e,{Zo:()=>g,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},g=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),u=o(a),s=r,k=u["".concat(d,".").concat(s)]||u[s]||m[s]||l;return a?n.createElement(k,i(i({ref:e},g),{},{components:a})):n.createElement(k,i({ref:e},g))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15664:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"datadog"},i=void 0,p={unversionedId:"plugins/datadog",id:"version-3.0/plugins/datadog",isDocsHomePage:!1,title:"datadog",description:"datadog \u662f Apache APISIX \u5185\u7f6e\u7684\u76d1\u63a7\u63d2\u4ef6\uff0c\u53ef\u4e0e Datadog\uff08\u4e91\u5e94\u7528\u6700\u5e38\u7528\u7684\u76d1\u63a7\u548c\u53ef\u89c2\u6d4b\u6027\u5e73\u53f0\u4e4b\u4e00\uff09\u65e0\u7f1d\u96c6\u6210\u3002datadog \u63d2\u4ef6\u652f\u6301\u5bf9\u6bcf\u4e2a\u8bf7\u6c42\u548c\u54cd\u5e94\u5468\u671f\u8fdb\u884c\u591a\u79cd\u6307\u6807\u53c2\u6570\u7684\u83b7\u53d6\uff0c\u8fd9\u4e9b\u6307\u6807\u53c2\u6570\u57fa\u672c\u53cd\u6620\u4e86\u7cfb\u7edf\u7684\u884c\u4e3a\u548c\u5065\u5eb7\u72b6\u51b5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/plugins/datadog.md",sourceDirName:"plugins",slug:"/plugins/datadog",permalink:"/zh/docs/apisix/3.0/plugins/datadog",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/plugins/datadog.md",tags:[],version:"3.0",frontMatter:{title:"datadog"},sidebar:"version-3.0/docs",previous:{title:"node-status",permalink:"/zh/docs/apisix/3.0/plugins/node-status"},next:{title:"http-logger",permalink:"/zh/docs/apisix/3.0/plugins/http-logger"}},d=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"APISIX-Datadog plugin \u5de5\u4f5c\u539f\u7406",id:"apisix-datadog-plugin-\u5de5\u4f5c\u539f\u7406",children:[]},{value:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6",id:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6",children:[{value:"\u524d\u63d0\uff1aDatadog Agent",id:"\u524d\u63d0datadog-agent",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]},{value:"\u8865\u5145\uff1a\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u8865\u5145\u81ea\u5b9a\u4e49\u914d\u7f6e",children:[]}]},{value:"\u914d\u7f6e\u5c5e\u6027",id:"\u914d\u7f6e\u5c5e\u6027",children:[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u8f93\u51fa\u6307\u6807",id:"\u8f93\u51fa\u6307\u6807",children:[]}]}],o={toc:d};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"datadog")," \u662f Apache APISIX \u5185\u7f6e\u7684\u76d1\u63a7\u63d2\u4ef6\uff0c\u53ef\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"Datadog"),"\uff08\u4e91\u5e94\u7528\u6700\u5e38\u7528\u7684\u76d1\u63a7\u548c\u53ef\u89c2\u6d4b\u6027\u5e73\u53f0\u4e4b\u4e00\uff09\u65e0\u7f1d\u96c6\u6210\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"datadog")," \u63d2\u4ef6\u652f\u6301\u5bf9\u6bcf\u4e2a\u8bf7\u6c42\u548c\u54cd\u5e94\u5468\u671f\u8fdb\u884c\u591a\u79cd\u6307\u6807\u53c2\u6570\u7684\u83b7\u53d6\uff0c\u8fd9\u4e9b\u6307\u6807\u53c2\u6570\u57fa\u672c\u53cd\u6620\u4e86\u7cfb\u7edf\u7684\u884c\u4e3a\u548c\u5065\u5eb7\u72b6\u51b5\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"datadog")," \u63d2\u4ef6\u901a\u8fc7 UDP \u534f\u8bae\u5c06\u5176\u81ea\u5b9a\u4e49\u6307\u6807\u63a8\u9001\u7ed9 DogStatsD \u670d\u52a1\u5668\uff0c\u8be5\u670d\u52a1\u5668\u901a\u8fc7 UDP \u8fde\u63a5\u4e0e Datadog Agent \u6346\u7ed1\u5728\u4e00\u8d77\uff08\u5173\u4e8e\u5982\u4f55\u5b89\u88c5 Datadog Agent\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/agent/"},"Agent")," \uff09\u3002DogStatsD \u57fa\u672c\u4e0a\u662f StatsD \u534f\u8bae\u7684\u5b9e\u73b0\uff0c\u5b83\u4e3a Apache APISIX Agent \u6536\u96c6\u81ea\u5b9a\u4e49\u6307\u6807\uff0c\u5e76\u5c06\u5176\u805a\u5408\u6210\u5355\u4e2a\u6570\u636e\u70b9\uff0c\u53d1\u9001\u5230\u914d\u7f6e\u7684 Datadog \u670d\u52a1\u5668\u3002\u66f4\u591a\u5173\u4e8e DogStatsD \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/developers/dogstatsd/?tab=hostagent"},"DogStatsD")," \u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"datadog")," \u63d2\u4ef6\u5177\u6709\u5c06\u591a\u4e2a\u6307\u6807\u53c2\u6570\u7ec4\u6210\u4e00\u4e2a\u6279\u5904\u7406\u7edf\u4e00\u63a8\u9001\u7ed9\u5916\u90e8 Datadog Agent \u7684\u80fd\u529b\uff0c\u5e76\u4e14\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u540c\u4e00\u4e2a\u6570\u636e\u5305\u5957\u63a5\u5b57\u3002"),(0,r.kt)("p",null,"\u6b64\u529f\u80fd\u53ef\u4ee5\u6709\u6548\u89e3\u51b3\u65e5\u5fd7\u6570\u636e\u53d1\u9001\u4e0d\u53ca\u65f6\u7684\u95ee\u9898\u3002\u5728\u521b\u5efa\u6279\u5904\u7406\u5668\u4e4b\u540e\uff0c\u5982\u679c\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"inactive_timeout")," \u53c2\u6570\u8fdb\u884c\u914d\u7f6e\uff0c\u90a3\u4e48\u6279\u5904\u7406\u5668\u4f1a\u5728\u914d\u7f6e\u597d\u7684\u65f6\u95f4\u5185\u81ea\u52a8\u53d1\u9001\u65e5\u5fd7\u6570\u636e\u3002\u5982\u679c\u4e0d\u8fdb\u884c\u914d\u7f6e\uff0c\u65f6\u95f4\u9ed8\u8ba4\u4e3a 5s\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e Apache APISIX \u7684\u6279\u5904\u7406\u7a0b\u5e8f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.0/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor")),(0,r.kt)("h2",{id:"apisix-datadog-plugin-\u5de5\u4f5c\u539f\u7406"},"APISIX-Datadog plugin \u5de5\u4f5c\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1636685752757-d02d8305-2a68-4b3e-b2cc-9e5410c8bf11.png",alt:"APISIX-Datadog \u63d2\u4ef6\u67b6\u6784\u56fe"})),(0,r.kt)("p",null,"APISIX-Datadog \u63d2\u4ef6\u5c06\u5176\u81ea\u5b9a\u4e49\u6307\u6807\u63a8\u9001\u5230 DogStatsD server\u3002\u800c DogStatsD server \u901a\u8fc7 UDP \u8fde\u63a5\u4e0e Datadog agent \u6346\u7ed1\u5728\u4e00\u8d77\u3002DogStatsD \u662f StatsD \u534f\u8bae\u7684\u4e00\u4e2a\u5b9e\u73b0\u3002\u5b83\u4e3a Apache APISIX agent \u6536\u96c6\u81ea\u5b9a\u4e49\u6307\u6807\uff0c\u5c06\u5176\u805a\u5408\u6210\u4e00\u4e2a\u6570\u636e\u70b9\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u5230\u914d\u7f6e\u7684 Datadog server\u3002\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e DogStatsD \u7684\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee DogStatsD \u6587\u6863\u3002"),(0,r.kt)("p",null,"\u5f53\u4f60\u542f\u7528 APISIX-Datadog \u63d2\u4ef6\u65f6\uff0cApache APISIX agent \u4f1a\u5728\u6bcf\u4e2a\u8bf7\u6c42\u54cd\u5e94\u5468\u671f\u5411 DogStatsD server \u8f93\u51fa\u4ee5\u4e0b\u6307\u6807\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"StatsD \u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u5230\u7684\u8bf7\u6c42\u6570\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8be5\u8bf7\u6c42\u6240\u9700\u7684\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upstream latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38 server agent \u8bf7\u6c42\u5230\u6536\u5230\u54cd\u5e94\u6240\u9700\u7684\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APISIX Latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"APISIX agent \u5904\u7406\u8be5\u8bf7\u6c42\u7684\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ingress Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Timer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Egress Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Timer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u4f53\u5927\u5c0f\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u3002")))),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6307\u6807\u5c06\u88ab\u53d1\u9001\u5230 DogStatsD agent\uff0c\u5e76\u5e26\u6709\u4ee5\u4e0b\u6807\u7b7e\u3002\u5982\u679c\u4efb\u4f55\u7279\u5b9a\u7684\u6807\u7b7e\u6ca1\u6709\u5408\u9002\u7684\u503c\uff0c\u8be5\u6807\u7b7e\u5c06\u88ab\u76f4\u63a5\u7701\u7565\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route_name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u7684\u540d\u79f0\uff0c\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5c06\u663e\u793a\u8def\u7531 ID\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e00\u4e2a\u8def\u7531\u662f\u7528\u670d\u52a1\u7684\u62bd\u8c61\u6982\u5ff5\u521b\u5efa\u7684\uff0c\u90a3\u4e48\u7279\u5b9a\u7684\u670d\u52a1 ID \u5c06\u88ab\u4f7f\u7528\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8def\u7531\u6709\u4e00\u4e2a\u94fe\u63a5\u7684\u6d88\u8d39\u8005\uff0c\u6d88\u8d39\u8005\u7684\u7528\u6237\u540d\u5c06\u88ab\u6dfb\u52a0\u4e3a\u4e00\u4e2a\u6807\u7b7e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"balancer_ip"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u4e86\u5f53\u524d\u8bf7\u6c42\u7684\u4e0a\u6e38\u590d\u5236\u5747\u8861\u5668\u7684\u7684 IP\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_status"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP \u54cd\u5e94\u72b6\u6001\u4ee3\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scheme"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u7528\u4e8e\u63d0\u51fa\u8bf7\u6c42\u7684\u534f\u8bae\uff0c\u5982 HTTP\u3001gRPC\u3001gRPCs \u7b49\u3002")))),(0,r.kt)("p",null,"APISIX-Datadog \u63d2\u4ef6\u7ef4\u62a4\u4e86\u4e00\u4e2a\u5e26\u6709 timer \u7684 buffer\u3002\u5f53 timer \u5931\u6548\u65f6\uff0cAPISIX-Datadog \u63d2\u4ef6\u4f1a\u5c06 buffer \u7684\u6307\u6807\u4f5c\u4e3a\u4e00\u4e2a\u6279\u91cf\u5904\u7406\u7a0b\u5e8f\u4f20\u9001\u7ed9\u672c\u5730\u8fd0\u884c\u7684 DogStatsD server\u3002\u8fd9\u79cd\u65b9\u6cd5\u901a\u8fc7\u91cd\u590d\u4f7f\u7528\u76f8\u540c\u7684 UDP \u5957\u63a5\u5b57\uff0c\u5bf9\u8d44\u6e90\u7684\u5360\u7528\u8f83\u5c11\uff0c\u800c\u4e14\u7531\u4e8e\u53ef\u4ee5\u914d\u7f6e timer\uff0c\u6240\u4ee5\u4e0d\u4f1a\u4e00\u76f4\u8ba9\u7f51\u7edc\u8fc7\u8f7d\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,r.kt)("h3",{id:"\u524d\u63d0datadog-agent"},"\u524d\u63d0\uff1aDatadog Agent"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u4f60\u5fc5\u987b\u5728\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4e00\u4e2a Datadog agent\u3002\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a docker \u5bb9\u5668\uff0c\u4e00\u4e2a pod \u6216\u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u7684\u5305\u7ba1\u7406\u5668\u3002\u4f60\u53ea\u9700\u8981\u786e\u4fdd Apache APISIX agent \u53ef\u4ee5\u5230\u8fbe Datadog agent \u7684 8125 \u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u4ece\u6ca1\u4f7f\u7528\u8fc7 Datadog",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"li",href:"http://www.datadoghq.com/"},"www.datadoghq.com")," \uff0c\u521b\u5efa\u4e00\u4e2a\u8d26\u6237\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u6309\u7167\u4e0b\u56fe\u6807\u6ce8\u7684\u6b65\u9aa4\u751f\u6210 API \u5bc6\u94a5\u3002 ",(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1636685007445-05f134fd-e80a-4173-b1d7-f0a118087998.png",alt:"Generate an API Key"})))),(0,r.kt)("li",{parentName:"ol"},"APISIX-Datadog \u63d2\u4ef6\u53ea\u9700\u8981\u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"li"},"datadog/agent")," \u7684 dogstatsd \u7ec4\u4ef6\u5373\u53ef\u5b9e\u73b0\uff0c\u56e0\u4e3a\u8be5\u63d2\u4ef6\u6309\u7167 statsd \u534f\u8bae\u901a\u8fc7\u6807\u51c6\u7684 UDP \u5957\u63a5\u5b57\u5411 DogStatsD server \u5f02\u6b65\u53d1\u9001\u53c2\u6570\u3002\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u72ec\u7acb\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"datadog/dogstatsd")," \u955c\u50cf\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5b8c\u6574\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"datadog/agent")," \uff0c\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"datadog/dogstatsd")," \u7684\u7ec4\u4ef6\u5927\u5c0f\u53ea\u6709\u5927\u7ea6 11 MB\uff0c\u66f4\u52a0\u8f7b\u91cf\u5316\u3002\u800c\u5b8c\u6574\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"datadog/agent")," \u955c\u50cf\u7684\u5927\u5c0f\u4e3a 2.8 GB\u3002")),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06\u5b83\u4f5c\u4e3a\u4e00\u4e2a\u5bb9\u5668\u6765\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# pull the latest image\ndocker pull datadog/dogstatsd:latest\n# run a detached container\ndocker run -d --name dogstatsd-agent -e DD_API_KEY=<Your API Key from step 2> -p 8125:8125/udp datadog/dogstatsd\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Kubernetes\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"dogstatsd")," \u4f5c\u4e3a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Daemonset")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Multi-Container Pod")," \u4e0e Apache APISIX agent \u4e00\u8d77\u90e8\u7f72\u3002"),(0,r.kt)("h3",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u672c\u5c0f\u8282\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog")," \u63d2\u4ef6\u3002\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u524d\u8bf7\u786e\u8ba4\u60a8\u7684 Datadog Agent \u5df2\u7ecf\u542f\u52a8\u5e76\u6b63\u5e38\u8fd0\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "datadog": {}\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4efb\u4f55\u5bf9 uri ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello")," \u7684\u8bf7\u6c42\u90fd\u4f1a\u751f\u6210\u4e0a\u8ff0\u6307\u6807\uff0c\u5e76\u63a8\u9001\u5230 Datadog Agent \u7684 DogStatsD \u670d\u52a1\u5668\u3002"),(0,r.kt)("h3",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5220\u9664\u63d2\u4ef6\u914d\u7f6e\u4e2d\u76f8\u5e94\u7684 JSON \u914d\u7f6e\u4ee5\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog"),"\u3002\nAPISIX \u63d2\u4ef6\u662f\u652f\u6301\u70ed\u52a0\u8f7d\u7684\uff0c\u6240\u4ee5\u4e0d\u7528\u91cd\u65b0\u542f\u52a8 APISIX\uff0c\u914d\u7f6e\u5c31\u80fd\u751f\u6548\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"\u8865\u5145\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u8865\u5145\uff1a\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u9ed8\u8ba4\u914d\u7f6e\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"datadog")," \u63d2\u4ef6\u5e0c\u671b Dogstatsd \u670d\u52a1\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8125")," \u53ef\u7528\u3002\u5982\u679c\u4f60\u60f3\u66f4\u65b0\u914d\u7f6e\uff0c\u8bf7\u66f4\u65b0\u63d2\u4ef6\u7684\u5143\u6570\u636e\u3002\u5982\u679c\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog")," \u63d2\u4ef6\u5143\u6570\u636e\u7684\u5b57\u6bb5\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"#%E5%85%83%E6%95%B0%E6%8D%AE"},"\u5143\u6570\u636e"),"\u3002"),(0,r.kt)("p",null,"\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/admin/plugin_metadata/datadog")," \u53d1\u8d77\u8bf7\u6c42\uff0c\u66f4\u6539\u5176\u5143\u6570\u636e\u3002\u64cd\u4f5c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/datadog -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "host": "172.168.45.29",\n    "port": 8126,\n    "constant_tags": [\n        "source:apisix",\n        "service:custom"\n    ],\n    "namespace": "apisix"\n}\'\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u5c06\u4f1a\u66f4\u65b0\u5143\u6570\u636e\uff0c\u540e\u7eed\u5404\u6307\u6807\u5c06\u901a\u8fc7 UDP StatsD \u63a8\u9001\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"172.168.45.29:8126")," \u4e0a\u5bf9\u5e94\u7684\u670d\u52a1\uff0c\u5e76\u4e14\u914d\u7f6e\u5c06\u88ab\u70ed\u52a0\u8f7d\uff0c\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8 APISIX \u5b9e\u4f8b\uff0c\u5c31\u53ef\u4ee5\u4f7f\u914d\u7f6e\u751f\u6548\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"datadog")," \u63d2\u4ef6\u7684\u5143\u6570\u636e schema \u6062\u590d\u5230\u9ed8\u8ba4\u503c\uff0c\u53ea\u9700\u5411\u540c\u4e00\u4e2a\u670d\u52a1\u5730\u5740\u518d\u53d1\u51fa\u4e00\u4e2a Body \u4e3a\u7a7a\u7684 PUT \u8bf7\u6c42\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/datadog \\\n-H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '{}'\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u5c5e\u6027"},"\u914d\u7f6e\u5c5e\u6027"),(0,r.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prefer_name"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\uff0c\u5c06\u4f7f\u7528\u8def\u7531/\u670d\u52a1\u7684 id \u503c\u4f5c\u4e3a\u63d2\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"route_name"),"\uff0c\u800c\u4e0d\u662f\u5e26\u6709\u53c2\u6570\u7684\u6807\u7b7e\u540d\u79f0\u3002")))),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u7a0b\u5e8f\u6765\u805a\u96c6\u548c\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u7684\u6279\u6b21\u3002\u8fd9\u5c31\u907f\u514d\u4e86\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6279\u5904\u7406\u7a0b\u5e8f\u6bcf ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u6216\u5f53\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," \u65f6\u63d0\u4ea4\u6570\u636e\u3002\u6709\u5173\u4fe1\u606f\u6216\u81ea\u5b9a\u4e49\u6279\u5904\u7406\u7a0b\u5e8f\u7684\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.0/batch-processor#configuration"},"\u6279\u5904\u7406\u7a0b\u5e8f")," \u914d\u7f6e\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"127.0.0.1"'),(0,r.kt)("td",{parentName:"tr",align:null},"DogStatsD \u670d\u52a1\u5668\u7684\u4e3b\u673a\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"8125"),(0,r.kt)("td",{parentName:"tr",align:null},"DogStatsD \u670d\u52a1\u5668\u7684\u4e3b\u673a\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'"apisix"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531 APISIX \u4ee3\u7406\u53d1\u9001\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u524d\u7f00\u3002\u5bf9\u5bfb\u627e\u6307\u6807\u56fe\u7684\u5b9e\u4f53\u5f88\u6709\u5e2e\u52a9\uff0c\u4f8b\u5982\uff1aapisix.request.counter\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"constant_tags"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},'[ "source:apisix" ]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u9759\u6001\u6807\u7b7e\u5d4c\u5165\u5230\u751f\u6210\u7684\u6307\u6807\u4e2d\u3002\u8fd9\u5bf9\u67d0\u4e9b\u4fe1\u53f7\u7684\u5ea6\u91cf\u8fdb\u884c\u5206\u7ec4\u5f88\u6709\u7528\u3002")))),(0,r.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u6709\u6548\u5730\u7f16\u5199\u6807\u7b7e\uff0c\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/getting_started/tagging/#defining-tags"},"\u8fd9\u91cc")),(0,r.kt)("h3",{id:"\u8f93\u51fa\u6307\u6807"},"\u8f93\u51fa\u6307\u6807"),(0,r.kt)("p",null,"\u542f\u7528 datadog \u63d2\u4ef6\u4e4b\u540e\uff0cAPISIX \u5c31\u4f1a\u6309\u7167\u4e0b\u9762\u7684\u6307\u6807\u683c\u5f0f\uff0c\u5c06\u6570\u636e\u6574\u7406\u6210\u6570\u636e\u5305\u6700\u7ec8\u53d1\u9001\u5230 DogStatsD server\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"StatsD Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"Counter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6536\u5230\u7684\u8bf7\u6c42\u6570\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8be5\u8bf7\u6c42\u6240\u9700\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upstream latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7406\u8bf7\u6c42\u5230\u4e0a\u6e38\u670d\u52a1\u5668\u76f4\u5230\u6536\u5230\u54cd\u5e94\u6240\u9700\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APISIX Latency"),(0,r.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,r.kt)("td",{parentName:"tr",align:null},"APISIX \u4ee3\u7406\u5904\u7406\u8be5\u8bf7\u6c42\u7684\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ingress Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Timer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u7684\u8bf7\u6c42\u4f53\u5927\u5c0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Egress Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Timer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u7684\u54cd\u5e94\u4f53\u5927\u5c0f\u3002")))),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6307\u6807\u4f1a\u5e26\u6709\u4ee5\u4e0b\u6807\u7b7e\uff0c\u5e76\u9996\u5148\u88ab\u53d1\u9001\u5230\u672c\u5730 DogStatsD Agent\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4e00\u4e2a\u6807\u7b7e\u6ca1\u6709\u5408\u9002\u7684\u503c\uff0c\u8be5\u6807\u7b7e\u5c06\u88ab\u76f4\u63a5\u7701\u7565\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"route_name"),"\uff1a\u5728\u8def\u7531\u6a21\u5f0f\u5b9a\u4e49\u4e2d\u6307\u5b9a\u7684\u540d\u79f0\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u6216\u63d2\u4ef6\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"li"},"prefer_name")," \u88ab\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5b83\u5c06\u9ed8\u8ba4\u4f7f\u7528\u8def\u7531/\u670d\u52a1\u7684 id \u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"service_name"),"\uff1a\u5982\u679c\u4e00\u4e2a\u8def\u7531\u662f\u7528\u670d\u52a1\u7684\u62bd\u8c61\u6982\u5ff5\u521b\u5efa\u7684\uff0c\u7279\u5b9a\u7684\u670d\u52a1 name/id\uff08\u57fa\u4e8e\u63d2\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"prefer_name")," \u5c5e\u6027\uff09\u5c06\u88ab\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"consumer"),"\uff1a\u5982\u679c\u8def\u7531\u6709\u4e00\u4e2a\u6b63\u5728\u94fe\u63a5\u4e2d\u7684\u6d88\u8d39\u8005\uff0c\u90a3\u4e48\u6d88\u8d39\u8005\u7684\u7528\u6237\u540d\u5c06\u88ab\u6dfb\u52a0\u4e3a\u4e00\u4e2a\u6807\u7b7e\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"balancer_ip"),"\uff1a\u5904\u7406\u5f53\u524d\u8bf7\u6c42\u7684\u4e0a\u6e38\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"response_status"),"\uff1aHTTP \u54cd\u5e94\u72b6\u6001\u4ee3\u7801\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scheme"),"\uff1a\u5df2\u7528\u4e8e\u63d0\u51fa\u8bf7\u6c42\u7684\u534f\u8bae\uff0c\u5982 HTTP\u3001gRPC\u3001gRPCs \u7b49\u3002")))}g.isMDXComponent=!0}}]);