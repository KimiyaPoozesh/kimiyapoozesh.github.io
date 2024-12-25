const cacheName = "KimiaPoozesh-Portfolio-0.1";
const contentToCache = [
    "Build/dbf2241f913827ad9086b9e9f4204713.loader.js",
    "Build/c4de552d015870d179c511769d278776.framework.js",
    "Build/caefc4b135ffa4fa4d67c9ed4203163e.data",
    "Build/5046bd0a3b215e8a58a37ddd6f1e24e8.wasm",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
