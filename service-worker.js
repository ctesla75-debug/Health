
const CACHE="health-v3";

self.addEventListener("install",e=>{
 e.waitUntil(
  caches.open(CACHE).then(c=>c.addAll([
   "/Health/",
   "/Health/index.html",
   "/Health/app.js",
   "/Health/manifest.json",
   "/Health/icons/icon-192.png",
   "/Health/icons/icon-512.png"
  ]))
 );
});

self.addEventListener("fetch",e=>{
 e.respondWith(
  caches.match(e.request).then(r=>r||fetch(e.request))
 );
});
