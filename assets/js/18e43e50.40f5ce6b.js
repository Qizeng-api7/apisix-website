"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[22032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17749:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"ApisixGlobalRule",keywords:["APISIX ingress","Apache APISIX","ApisixGlobalRule"],description:"Guide to using ApisixGlobalRule custom Kubernetes resource."},a=void 0,l={unversionedId:"concepts/apisix_global_rule",id:"concepts/apisix_global_rule",isDocsHomePage:!1,title:"ApisixGlobalRule",description:"Guide to using ApisixGlobalRule custom Kubernetes resource.",source:"@site/docs/apisix-ingress-controller/concepts/apisix_global_rule.md",sourceDirName:"concepts",slug:"/concepts/apisix_global_rule",permalink:"/docs/ingress-controller/next/concepts/apisix_global_rule",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/concepts/apisix_global_rule.md",tags:[],version:"current",frontMatter:{title:"ApisixGlobalRule",keywords:["APISIX ingress","Apache APISIX","ApisixGlobalRule"],description:"Guide to using ApisixGlobalRule custom Kubernetes resource."}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApisixGlobalRule")," is a Kubernetes CRD resource used to create an APISIX ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/global-rule/"},"global-rule")," object, which can apply the ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/terminology/plugin/"},"plugin")," to all requests."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Enable the ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/limit-count/"},"limit-count")," plugin on the APISIX, which can limit all requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixGlobalRule\nmetadata:\n  name: global\nspec:\n  plugins:\n  - name: limit-count\n    enalbed: true \n    config:\n      time_window": 60,\n      policy: "local",\n      count: 2,\n      key: "remote_addr",\n      rejected_code: 503\n')))}s.isMDXComponent=!0}}]);