"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[63840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||s;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98419:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={title:"APISIX Ingress Enhancement Proposals (AEPs)"},a=void 0,i={unversionedId:"aeps/README",id:"version-1.5.0/aeps/README",isDocsHomePage:!1,title:"APISIX Ingress Enhancement Proposals (AEPs)",description:"This document was inspired by the Kubernetes Enhancement Proposals (KEPs) of the Kubernetes community.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/aeps/README.md",sourceDirName:"aeps",slug:"/aeps/README",permalink:"/docs/ingress-controller/1.5.0/aeps/README",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.5.0/docs/en/latest/aeps/README.md",tags:[],version:"1.5.0",frontMatter:{title:"APISIX Ingress Enhancement Proposals (AEPs)"}},c=[],p={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document was inspired by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps"},"Kubernetes Enhancement Proposals (KEPs)")," of the Kubernetes community."),(0,o.kt)("p",null,"By recording the long-term plan Proposal of the current Apache APISIX Ingress project in this directory, it is convenient for the community to participate in and contribute."),(0,o.kt)("p",null,"The most successful example before this is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/638"},"Proposal: add ApisixPluginConfig CRD"),". But this way is not friendly enough."))}l.isMDXComponent=!0}}]);