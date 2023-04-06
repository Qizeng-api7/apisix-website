"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,k=s["".concat(o,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},880:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"proxy-rewrite"},i=void 0,p={unversionedId:"plugins/proxy-rewrite",id:"version-2.12/plugins/proxy-rewrite",isDocsHomePage:!1,title:"proxy-rewrite",description:"\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.12/plugins/proxy-rewrite.md",sourceDirName:"plugins",slug:"/plugins/proxy-rewrite",permalink:"/zh/docs/apisix/2.12/plugins/proxy-rewrite",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.12/docs/zh/latest/plugins/proxy-rewrite.md",tags:[],version:"2.12",frontMatter:{title:"proxy-rewrite"},sidebar:"version-2.12/docs",previous:{title:"response-rewrite",permalink:"/zh/docs/apisix/2.12/plugins/response-rewrite"},next:{title:"grpc-transcode",permalink:"/zh/docs/apisix/2.12/plugins/grpc-transcode"}},o=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E7%AE%80%E4%BB%8B"},"\u7b80\u4ecb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},"\u5c5e\u6027")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},"\u5982\u4f55\u542f\u7528")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},"\u7981\u7528\u63d2\u4ef6"))),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"proxy-rewrite \u662f\u4e0a\u6e38\u4ee3\u7406\u4fe1\u606f\u91cd\u5199\u63d2\u4ef6\uff0c\u652f\u6301\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"scheme"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"host")," \u7b49\u4fe1\u606f\u7684\u91cd\u5199\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scheme"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},'"http"'),(0,a.kt)("td",{parentName:"tr",align:null},'["http", "https"]'),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0d\u63a8\u8350\u4f7f\u7528\u3002\u5e94\u8be5\u5728 Upstream \u7684 scheme \u5b57\u6bb5\u8bbe\u7f6e\u4e0a\u6e38\u7684 scheme\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uri"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u5730\u5740\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"method"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "HEAD", "DELETE", "OPTIONS","MKCOL", "COPY", "MOVE", "PROPFIND", "PROPFIND","LOCK", "UNLOCK", "PATCH", "TRACE"]'),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06route\u7684\u8bf7\u6c42\u65b9\u6cd5\u4ee3\u7406\u4e3a\u8be5\u8bf7\u6c42\u65b9\u6cd5\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regex_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u5730\u5740, \u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6765\u81ea\u5ba2\u6237\u7aef\u7684uri\uff0c\u5f53\u5339\u914d\u6210\u529f\u540e\u4f7f\u7528\u6a21\u677f\u66ff\u6362\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684uri, \u672a\u5339\u914d\u6210\u529f\u65f6\u5c06\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684uri\u8f6c\u53d1\u81f3\u4e0a\u6e38\u3002\u5f53 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"regex_uri")," \u540c\u65f6\u5b58\u5728\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u4f18\u5148\u88ab\u4f7f\u7528\u3002\u4f8b\u5982\uff1a",'["^/iresty/(.',(0,a.kt)("em",{parentName:"td"},")/(."),')/(.*)","/$1-$2-$3"]'," \u7b2c\u4e00\u4e2a\u5143\u7d20\u4ee3\u8868\u5339\u914d\u6765\u81ea\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684uri\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4ee3\u8868\u5339\u914d\u6210\u529f\u540e\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684uri\u6a21\u677f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"host")," \u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"iresty.com")," \u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"headers"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"headers"),"\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\u3002\u5934\u4fe1\u606f\u5982\u679c\u5b58\u5728\u5c06\u91cd\u5199\uff0c\u4e0d\u5b58\u5728\u5219\u6dfb\u52a0\u3002\u60f3\u8981\u5220\u9664\u67d0\u4e2a header \u7684\u8bdd\uff0c\u628a\u5bf9\u5e94\u7684\u503c\u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\u5373\u53ef\u3002\u652f\u6301\u4f7f\u7528 Nginx \u7684\u53d8\u91cf\uff0c\u9700\u8981\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"td"},"client_addr: $remote_addr")," \uff1a\u8868\u793a\u8bf7\u6c42\u5934 ",(0,a.kt)("inlineCode",{parentName:"td"},"client_addr")," \u4e3a\u5ba2\u6237\u7aefIP\u3002")))),(0,a.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 route \u4e0a\u5f00\u542f\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/home.html",\n            "scheme": "http",\n            "host": "iresty.com",\n            "headers": {\n                "X-Api-Version": "v1",\n                "X-Api-Engine": "apisix",\n                "X-Api-useless": ""\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u914d\u7f6e\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET http://127.0.0.1:9080/test/index.html\n")),(0,a.kt)("p",null,"\u53d1\u9001\u8bf7\u6c42\uff0c\u67e5\u770b\u4e0a\u6e38\u670d\u52a1 ",(0,a.kt)("inlineCode",{parentName:"p"},"access.log"),"\uff0c\u5982\u679c\u8f93\u51fa\u4fe1\u606f\u4e0e\u914d\u7f6e\u4e00\u81f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"127.0.0.1 - [26/Sep/2019:10:52:20 +0800] iresty.com GET /test/home.html HTTP/1.1 200 38 - curl/7.29.0 - 0.000 199 107\n")),(0,a.kt)("p",null,"\u5373\u8868\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u751f\u6548\u4e86\u3002"),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}u.isMDXComponent=!0}}]);