"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1594],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||c;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var n=r(5773),a=(r(7378),r(5318));const c={title:"Apache APISIX \u7684\u5b75\u5316\u5668\u4e4b\u65c5",date:new Date("2021-08-06T16:10:00.000Z"),keywords:["APISIX","Apache","\u5f00\u6e90","\u5b75\u5316"],description:"Apache APISIX \u7684\u5b75\u5316\u8fc7\u7a0b\u3002"},o=void 0,p={permalink:"/articles/Apache-APISIX-Incubator-Journey",source:"@site/articles/Apache-APISIX-Incubator-Journey.md",title:"Apache APISIX \u7684\u5b75\u5316\u5668\u4e4b\u65c5",description:"Apache APISIX \u7684\u5b75\u5316\u8fc7\u7a0b\u3002",date:"2021-08-06T16:10:00.000Z",formattedDate:"August 6, 2021",tags:[],readingTime:.32,truncated:!1,authors:[],prevItem:{title:"\u5982\u4f55\u5c06 Apache APISIX \u6269\u5c55\u4e3a\u4e00\u4e2a\u670d\u52a1\u7f51\u683c\u7684\u8fb9\u8f66",permalink:"/articles/How-To-Extend-Apache-APISIX-into-a-Service-Mesh-Sidecar"},nextItem:{title:"\u4f9d\u6258\u793e\u533a\u8ba9 Apache APISIX \u9ad8\u901f\u53d1\u5c55",permalink:"/articles/Relying-On-The-Community-To-Get-Apache-APISIX-Up-Speed"}},i={authorsImageUrls:[]},l=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,a.kt)("p",null,"\u6e29\u94ed\uff0cApache Member\uff0cApache APISIX PMC \u4e3b\u5e2d\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://api7.ai/"},"\u652f\u6d41\u79d1\u6280"),"\u8054\u5408\u521b\u59cb\u4eba\u3002"),(0,a.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,a.kt)("p",null,"Apache APISIX \u7684\u5b75\u5316\u8fc7\u7a0b\u3002"),(0,a.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,a.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,a.kt)("img",{src:"https://static.apiseven.com/202108/1639468506819-7f829080-19de-4d94-b103-e1d967e0baea.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}s.isMDXComponent=!0}}]);