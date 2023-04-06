"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9256],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(a),m=n,g=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8788:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(25773),n=(a(27378),a(35318));const i={title:"Biweekly Report (Feb 27 - Mar 12)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"The cloud-native API gateway Apache APISIX has added functions such as enabling opentelemetry plugin to support https upstream and adding 'range_id' algorithm for 'request-id' plugin.",tags:["Community"],image:"https://static.apiseven.com/uploads/2023/03/17/pf3ERDxP_%E5%8F%8C%E5%91%A8%E6%8A%A5%E5%B0%81%E9%9D%A2-0317.png"},o=void 0,p={permalink:"/blog/2023/03/17/weekly-report-0312",source:"@site/blog/2023/03/17/weekly-report-0312.md",title:"Biweekly Report (Feb 27 - Mar 12)",description:"The cloud-native API gateway Apache APISIX has added functions such as enabling opentelemetry plugin to support https upstream and adding 'range_id' algorithm for 'request-id' plugin.",date:"2023-03-17T00:00:00.000Z",formattedDate:"March 17, 2023",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.045,truncated:!0,authors:[],prevItem:{title:"Biweekly Report (Mar 13 - Mar 26)",permalink:"/blog/2023/03/30/weekly-report-0330"},nextItem:{title:"Release Apache APISIX 3.2.0",permalink:"/blog/2023/03/10/release-apache-apisix-3.2.0"}},l={authorsImageUrls:[]},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Contributor Statistics",id:"contributor-statistics",children:[],level:2},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"Apache APISIX Ingress Controller",id:"apache-apisix-ingress-controller",children:[],level:3}],level:2},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[],level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"From 2.27 to 3.12, 29 contributors submitted 74 commits for Apache APISIX. Thank you for your contributions to Apache APISIX.")),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Apache APISIX grew up as a community from the first day it was open-sourced, and quickly became the most active open-source API gateway project in the world. These achievements are inseparable from the joint efforts of community partners."),(0,n.kt)("p",null,'"If you want to go fast, go alone. If you want to go far, go together." The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.'),(0,n.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/03/14/0rjys38r_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E8%B4%A1%E7%8C%AE%E8%80%85%E6%B5%B7%E6%8A%A5-05%E6%9C%9F.png",alt:"Apache APISIX Contributors List"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/03/14/WZpcYrG7_%E7%A4%BE%E5%8C%BA%E5%8F%8C%E5%91%A8%E6%8A%A5-%E6%96%B0%E6%99%8B%E6%B5%B7%E6%8A%A5-05%E6%9C%9F.png",alt:"Apache APISIX New Contributors"})),(0,n.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,n.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8722"},"Support clickhouse-logger plugin log option of request/response body")," (Contributor: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pixeldin"},"pixeldin"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8898"},'Support reserved environment variable "APISIX_DEPLOYMENT_ETCD_HOST"')," (Contributor: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/An-DJ"},"An-DJ"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8959"},"Add degraphql plugin")," (Contributor: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),")"))),(0,n.kt)("h3",{id:"apache-apisix-ingress-controller"},"Apache APISIX Ingress Controller"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add IngressClass support for custom resources of APISIX Ingress, allowing multiple sets of Ingress controllers to be deployed simultaneously in the same cluster and use custom resources.")),(0,n.kt)("p",null,"Contributors\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AlinsRan"},"AlinsRan"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lingsamuel"},"lingsamuel"),"\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Donghui0"},"Donghui0"),"\uff0crelated PR\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/593"},"feat: make multiple controllers handle different ApisixRoute CRDs"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1674"},"feat: ApisixUpstream support IngressClass"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1714"},"feat: ApisixTls suuport ingressClass"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1716"},"feat: support ingressClass for ApisixPluginConfig"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1717"},"feat: ApisixConsumer support ingressClass"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1718"},"feat: support ingressClass for ApisixGlobalRule"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1720"},"feat: ApisixClusterConfig support IngressClass")))),(0,n.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/03/02/security-policy-auditable/"},"Make your security policy auditable")),(0,n.kt)("p",{parentName:"li"},"This blog shows how you can leverage OPA and Apache APISIX to move your authentication and authorization logic from the code to the infrastructure. The former allows you to audit your security policies, the latter coherence among all your upstream across all tech stacks.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/01/18/consul-with-apisix/"},"The right feature at the right place")),(0,n.kt)("p",{parentName:"li"},"This blog takes the example of per-user rate limiting to show how one can implement it in a library and an infrastructure component. Then, the author generalized this example and gave a couple of guidelines.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/01/18/consul-with-apisix/"},"How to Integrate API Gateway and Consul? Not Consul K/V")),(0,n.kt)("p",{parentName:"li"},"Apache APISIX supports the Consul service discovery registry. This article will walk you through the process of implementing service discovery and service registry in Apache APISIX."))),(0,n.kt)("p",null,"A wealth of documentation tutorials and experience has been accumulated on the Apache APISIX official website and GitHub. If you encounter problems, you can look into the documentation, search keywords in the issues, or participate in the discussion on the issues, proposing your own ideas and practical experience."))}u.isMDXComponent=!0}}]);