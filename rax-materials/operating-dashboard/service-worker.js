"use strict";var precacheConfig=[["/ice/rax-materials/operating-dashboard/favicon.png","0d4cca8dcc3deff70425210396f97a03"],["/ice/rax-materials/operating-dashboard/images/avatar-44478d27.png","44478d278bc5b625667a7d3546c0f89b"],["/ice/rax-materials/operating-dashboard/images/bank-26fc61c7.png","26fc61c70a6c885369541925c32b94c4"],["/ice/rax-materials/operating-dashboard/images/car-8169ca22.png","8169ca22a6c202b98a38585390fb9496"],["/ice/rax-materials/operating-dashboard/images/enter-fdbba482.png","fdbba482978604663a5fc278731d05a1"],["/ice/rax-materials/operating-dashboard/images/fly-07b3d16c.png","07b3d16c329bb9396a8e843d26c68925"],["/ice/rax-materials/operating-dashboard/images/icons/icon-128x128.png","b57be776006e9f6d03dd474a5056f1b1"],["/ice/rax-materials/operating-dashboard/images/icons/icon-144x144.png","fb496b753a6e98c0b94c5bac70716243"],["/ice/rax-materials/operating-dashboard/images/icons/icon-152x152.png","4b19f343321ef4252c1355055bd37e6b"],["/ice/rax-materials/operating-dashboard/images/icons/icon-192x192.png","10e08149886fe7bab53a5129bb816d95"],["/ice/rax-materials/operating-dashboard/images/icons/icon-384x384.png","1d47255a502d9817a71d3d87d8c9e1d7"],["/ice/rax-materials/operating-dashboard/images/icons/icon-512x512.png","2a1f755aa55f24023788feb696cda025"],["/ice/rax-materials/operating-dashboard/images/icons/icon-72x72.png","195ecd89be117baf5ceac2a97a5ed3b5"],["/ice/rax-materials/operating-dashboard/images/icons/icon-96x96.png","31e0f34da6949ee21607d28b7b7acd2c"],["/ice/rax-materials/operating-dashboard/images/like-98aa6f22.png","98aa6f22d938d57e35206f86c95d37a0"],["/ice/rax-materials/operating-dashboard/images/not-found-4fc3e7d8.png","4fc3e7d83a32de31050d10727fefe786"],["/ice/rax-materials/operating-dashboard/images/price-a68b1629.png","a68b1629657b57f85e1e0aba3f999a43"],["/ice/rax-materials/operating-dashboard/images/prompt_fill-c6ae4cea.png","c6ae4ceaf2878ff0a58a3d72453a7b61"],["/ice/rax-materials/operating-dashboard/images/refund-5c632486.png","5c632486788afa817569f7bdd0e06e2b"],["/ice/rax-materials/operating-dashboard/images/setup_fill-302f359a.png","302f359aba84867f7905c659baa2cf62"],["/ice/rax-materials/operating-dashboard/images/shop_fill-1ef2ea88.png","1ef2ea88b6294cb2dd4948a6d864f8a7"],["/ice/rax-materials/operating-dashboard/images/systemprompt_fill-c05cf86c.png","c05cf86c6cbd6c29c2c76ffd15b597c7"],["/ice/rax-materials/operating-dashboard/images/wangwang_fill-38c7fb77.png","38c7fb77f44b205c2c58899358526635"],["/ice/rax-materials/operating-dashboard/index.html","44a88d1c519894a4170d9fbc8fb6c7a4"],["/ice/rax-materials/operating-dashboard/js/atag.js","a77b5510dcff65e53cc87169b45d93b4"],["/ice/rax-materials/operating-dashboard/js/index.min.js","950ddfc1e5b91988da471ab7a691cff5"],["/ice/rax-materials/operating-dashboard/js/vendor.js","419a554a58d3184432c66f0272e755d7"],["/ice/rax-materials/operating-dashboard/manifest.json","f9514ac1621261427f4c5d697d584e74"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=a),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,r,n){var t=new URL(e);return n&&t.pathname.match(n)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(r)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var r=new URL(a).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,a){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],r=e[1],n=new URL(a,self.location),t=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!a.has(r)){var n=new Request(r,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+r+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(r,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!a.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,"index.html"),a=urlsToCacheKeys.has(r));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});