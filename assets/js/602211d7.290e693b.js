"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1129],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),y=a,f=m["".concat(l,".").concat(y)]||m[y]||s[y]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={title:"The Practice of Public Gateway in CDN Scenario from UPYUN",author:"Sylvia",authorURL:"https://github.com/SylviaBABY",authorImageURL:"https://avatars.githubusercontent.com/u/39793568?v=4",keywords:["UPYUN","CDN","Apache APISIX","Gateway","Open Source"],description:"In the public network gateway scenario, UPYUN linked the internal platform and Feishu reminder function based on APISIX.",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/Upyun.png"},i=void 0,c={permalink:"/blog/2022/01/20/upyun-public-gateway-usecase",source:"@site/blog/2022/01/20/upyun-public-gateway-usecase.md",title:"The Practice of Public Gateway in CDN Scenario from UPYUN",description:"In the public network gateway scenario, UPYUN linked the internal platform and Feishu reminder function based on APISIX.",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[{label:"Case Studies",permalink:"/blog/tags/case-studies"}],readingTime:5.315,truncated:!0,authors:[{name:"Sylvia",url:"https://github.com/SylviaBABY",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Get More Details About xRPC",permalink:"/blog/2022/01/21/apisix-xrpc-details-and-miltilingual"},nextItem:{title:"Biweekly Report (Jan 1 - Jan 16)",permalink:"/blog/2022/01/19/weekly-report-0116"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the previous sharing, we brought you the application of cloud at the Ingress level. This time, we will introduce you to the current cloud application examples under the public network gateway scenario, hoping to bring you some practical Apache APISIX scenarios to share in the cloud storage industry.")))}s.isMDXComponent=!0}}]);