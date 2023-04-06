"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[36e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34199:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Cache API responses",keywords:["API Gateway","Apache APISIX","Cache","Performance"],description:"This tutorial will focus primarily on handling caching at the API Gateway level by using Apache APISIX API Gateway and you will learn how to use proxy-caching plugin to improve response efficiency for your Web or Microservices API."},o=void 0,c={unversionedId:"tutorials/cache-api-responses",id:"version-3.2/tutorials/cache-api-responses",isDocsHomePage:!1,title:"Cache API responses",description:"This tutorial will focus primarily on handling caching at the API Gateway level by using Apache APISIX API Gateway and you will learn how to use proxy-caching plugin to improve response efficiency for your Web or Microservices API.",source:"@site/docs-apisix_versioned_docs/version-3.2/tutorials/cache-api-responses.md",sourceDirName:"tutorials",slug:"/tutorials/cache-api-responses",permalink:"/zh/docs/apisix/tutorials/cache-api-responses",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.2/docs/zh/latest/tutorials/cache-api-responses.md",tags:[],version:"3.2",frontMatter:{title:"Cache API responses",keywords:["API Gateway","Apache APISIX","Cache","Performance"],description:"This tutorial will focus primarily on handling caching at the API Gateway level by using Apache APISIX API Gateway and you will learn how to use proxy-caching plugin to improve response efficiency for your Web or Microservices API."},sidebar:"version-3.2/docs",previous:{title:"Manage API Consumers",permalink:"/zh/docs/apisix/tutorials/manage-api-consumers"},next:{title:"Add multiple API versions",permalink:"/zh/docs/apisix/tutorials/add-multiple-api-versions"}},s=[{value:"Improve performance with caching",id:"improve-performance-with-caching",children:[]},{value:"Caching in API Gateway",id:"caching-in-api-gateway",children:[]},{value:"Apache APISIX API Gateway Proxy Caching",id:"apache-apisix-api-gateway-proxy-caching",children:[]},{value:"Run the demo project",id:"run-the-demo-project",children:[]},{value:"Configure the Proxy Cache Plugin",id:"configure-the-proxy-cache-plugin",children:[]},{value:"Validate Proxy Caching",id:"validate-proxy-caching",children:[{value:"Additional test case",id:"additional-test-case",children:[]}]},{value:"What&#39;s next",id:"whats-next",children:[]},{value:"Recommended content",id:"recommended-content",children:[]}],l={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial will focus primarily on handling caching at the API Gateway level by using Apache APISIX API Gateway and you will learn how to use the proxy-cache plugin to improve response efficiency for your Web or Microservices API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here is an overview of what we cover in this walkthrough:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caching in API Gateway"),(0,r.kt)("li",{parentName:"ul"},"About ",(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/getting-started/"},"Apache APISIX API Gateway")),(0,r.kt)("li",{parentName:"ul"},"Run the demo project ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Boburmirzo/apisix-dotnet-docker"},"apisix-dotnet-docker")),(0,r.kt)("li",{parentName:"ul"},"Configure the ",(0,r.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/proxy-cache/"},"Proxy Cache")," plugin"),(0,r.kt)("li",{parentName:"ul"},"Validate Proxy Caching")),(0,r.kt)("h2",{id:"improve-performance-with-caching"},"Improve performance with caching"),(0,r.kt)("p",null,"When you are building an API, you want to keep it simple and fast. Once the concurrent need to read the same data increase, you'll face a few issues where you might be considering introducing ",(0,r.kt)("strong",{parentName:"p"},"caching"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There is latency on some API requests which is noticeably affecting the user's experience."),(0,r.kt)("li",{parentName:"ul"},"Fetching data from a database takes more time to respond."),(0,r.kt)("li",{parentName:"ul"},"Availability of your API is threatened by the API's high throughput."),(0,r.kt)("li",{parentName:"ul"},"There are some network failures in getting frequently accessed information from your API.")),(0,r.kt)("h2",{id:"caching-in-api-gateway"},"Caching in API Gateway"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cache_(computing)"},"Caching")," is capable of storing and retrieving network requests and their corresponding responses. Caching happens at different levels in a web application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edge caching or CDN"),(0,r.kt)("li",{parentName:"ul"},"Database caching"),(0,r.kt)("li",{parentName:"ul"},"Server caching (API caching)"),(0,r.kt)("li",{parentName:"ul"},"Browser caching")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reverse Proxy Caching")," is yet another caching mechanism that is usually implemented inside ",(0,r.kt)("strong",{parentName:"p"},"API Gateway"),". It can reduce the number of calls made to your endpoint and also improve the latency of requests to your API by caching a response from the upstream. If the API Gateway cache has a fresh copy of the requested resource, it uses that copy to satisfy the request directly instead of making a request to the endpoint. If the cached data is not found, the request travels to the intended upstream services (backend services)."),(0,r.kt)("h2",{id:"apache-apisix-api-gateway-proxy-caching"},"Apache APISIX API Gateway Proxy Caching"),(0,r.kt)("p",null,"With the help of Apache APISIX, you can enable API caching with ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/proxy-cache/"},"proxy-cache")," plugin to cache your API endpoint's responses and enhance the performance. It can be used together with other Plugins too and currently supports disk-based caching. The data to be cached can be filtered with ",(0,r.kt)("em",{parentName:"p"},"responseCodes"),", ",(0,r.kt)("em",{parentName:"p"},"requestModes"),", or more complex methods using the ",(0,r.kt)("em",{parentName:"p"},"noCache")," and ",(0,r.kt)("em",{parentName:"p"},"cacheByPass")," attributes. You can specify cache expiration time or a memory capacity in the plugin configuration as well. Please, refer to other ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," plugin's ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/proxy-cache/"},"attributes"),"."),(0,r.kt)("p",null,"With all this in mind, we'll look next at an example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," plugin offered by Apache APISIX and apply it for ASP.NET Core Web API with a single endpoint."),(0,r.kt)("h2",{id:"run-the-demo-project"},"Run the demo project"),(0,r.kt)("p",null,"Until now, I assume that you have the demo project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Boburmirzo/apisix-dotnet-docker"},"apisix-dotnet-docker")," is up and running. You can see the complete source code on ",(0,r.kt)("strong",{parentName:"p"},"Github")," and the instruction on how to build a multi-container ",(0,r.kt)("strong",{parentName:"p"},"APISIX")," via ",(0,r.kt)("strong",{parentName:"p"},"Docker CLI"),"."),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET Core project"),", there is a simple API to get all products list from the service layer in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Boburmirzo/apisix-dotnet-docker/blob/main/ProductApi/Controllers/ProductsController.cs"},"ProductsController.cs")," file."),(0,r.kt)("p",null,"Let's assume that this product list is usually updated only once a day and the endpoint receives repeated billions of requests every day to fetch the product list partially or all of them. In this scenario, using API caching technique with ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," plugin might be really helpful. For the demo purpose, we only enable caching for ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," method."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ideally, ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," requests should be cacheable by default\u200a-\u200auntil a special condition arises.")),(0,r.kt)("h2",{id:"configure-the-proxy-cache-plugin"},"Configure the Proxy Cache Plugin"),(0,r.kt)("p",null,"Now let's start with adding ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," plugin to Apache APISIX declarative configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," in the project. Because in the current project, we have not registered yet the plugin we are going to use for this demo. We appended ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," plugin's name to the end of plugins list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n\u200a-\u200ahttp-logger\n\u200a-\u200aip-restriction\n\xa0\u2026\n\u200a-\u200aproxy-cache\n")),(0,r.kt)("p",null,"You can add your cache configuration in the same file if you need to specify values like ",(0,r.kt)("em",{parentName:"p"},"disk_size, memory_size")," as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'proxy_cache:\n\xa0cache_ttl: 10s # default caching time if the upstream doesn\'t specify the caching time\n\xa0zones:\n\u200a-\u200aname: disk_cache_one # name of the cache. Admin can specify which cache to use in the Admin API by name\n\xa0memory_size: 50m # size of shared memory, used to store the cache index\n\xa0disk_size: 1G # size of disk, used to store the cache data\n\xa0disk_path: "/tmp/disk_cache_one" # path to store the cache data\n\xa0cache_levels: "1:2" # hierarchy levels of the cache\n')),(0,r.kt)("p",null,"Next, we can directly run ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix reload")," command to reload the latest plugin code without restarting Apache APISIX. See the command to reload the newly added plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugins/reload -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT\n")),(0,r.kt)("p",null,"Then, we run two more curl commands to configure an Upstream and Route for the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/products")," endpoint. The following command creates a sample upstream (that's our API Server):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/upstreams/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "productapi:80": 1\n  }\n}\'\n')),(0,r.kt)("p",null,"Next, we will add a new route with caching ability by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," plugin in ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," property and giving a reference to the upstream service by its unique id to forward requests to the API server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'{\n  "name": "Route for API Caching",\n  "methods": [\n    "GET"\n  ],\n  "uri": "/api/products",\n  "plugins": {\n    "proxy-cache": {\n      "cache_key": [\n        "$uri",\n        "-cache-id"\n      ],\n      "cache_bypass": [\n        "$arg_bypass"\n      ],\n      "cache_method": [\n        "GET"\n      ],\n      "cache_http_status": [\n        200\n      ],\n      "hide_cache_headers": true,\n      "no_cache": [\n        "$arg_test"\n      ]\n    }\n  },\n  "upstream_id": 1\n}\'\n')),(0,r.kt)("p",null,"As you can see in the above configuration, we defined some plugin attributes that we want to cache only successful responses from the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," method of API."),(0,r.kt)("h2",{id:"validate-proxy-caching"},"Validate Proxy Caching"),(0,r.kt)("p",null,"Finally, we can test the proxy caching if it is working as it is expected."),(0,r.kt)("p",null,"We will send multiple requests to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/products")," path and we should receive ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP 200 OK")," response each time. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status")," in the response shows ",(0,r.kt)("em",{parentName:"p"},"MISS")," meaning that the response has not cached yet when the request hits the route for the first time. Now, if you make another request, you will see that you get a cached response with the caching indicator as ",(0,r.kt)("em",{parentName:"p"},"HIT"),"."),(0,r.kt)("p",null,"Now we can make an initial request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:9080/api/products -i\n")),(0,r.kt)("p",null,"The response looks like as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\u2026\nApisix-Cache-Status: MISS\n")),(0,r.kt)("p",null,"When you do the next call to the service, the route responds to the request with a cached response since it has already cached in the previous request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\u2026\nApisix-Cache-Status: HIT\n")),(0,r.kt)("p",null,"Or if you try again to hit the endpoint after the time-to-live (TTL) period for the cache ends, you will get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\u2026\nApisix-Cache-Status: EXPIRED\n")),(0,r.kt)("p",null,"Excellent! We enabled caching for our API endpoint."),(0,r.kt)("h3",{id:"additional-test-case"},"Additional test case"),(0,r.kt)("p",null,"Optionally, you can also add some delay in the Product controller code and measure response time properly with and without cache:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c#"},'\xa0[HttpGet]\n\xa0public IActionResult GetAll()\n\xa0{\n\xa0Console.Write("The delay starts.\\n");\n\xa0System.Threading.Thread.Sleep(5000);\n\xa0Console.Write("The delay ends.");\n\xa0return Ok(_productsService.GetAll());\n\xa0}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to check response time would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i 'http://localhost:9080/api/products' -s -o /dev/null -w \"Response time: %{time_starttransfer} seconds\\n\"\n")),(0,r.kt)("h2",{id:"whats-next"},"What's next"),(0,r.kt)("p",null,"As we learned, it is easy to configure and quick to set up API response caching for our ASP.NET Core WEB API with the help of Apache APISIX. It can reduce significantly the number of calls made to your endpoint and also improve the latency of requests to your API. There are other numerous built-in plugins available in Apache APISIX, you can check them on ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/plugins"},"Plugin Hub page")," and use them per your need."),(0,r.kt)("h2",{id:"recommended-content"},"Recommended content"),(0,r.kt)("p",null,"You can refer to ",(0,r.kt)("a",{parentName:"p",href:"./protect-api.md"},"Expose API")," to learn about how to expose your first API."),(0,r.kt)("p",null,"You can refer to ",(0,r.kt)("a",{parentName:"p",href:"./protect-api.md"},"Protect API")," to protect your API."))}p.isMDXComponent=!0}}]);