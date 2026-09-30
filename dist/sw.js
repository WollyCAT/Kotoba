const CACHE_NAME = "kotoba-shell-1790728737399";
const PRECACHE = ["./assets/index-Cvjuf0Je.css","./assets/index-CYV3N8qB.js","./icons/kotoba-192.png","./icons/kotoba-192.svg","./icons/kotoba-512.png","./icons/kotoba-512.svg","./icons/kotoba-maskable-512.png","./index.html","./manifest.webmanifest"];
const SCOPE_ROOT = new URL('./', self.registration.scope);
const INDEX_URL = new URL('./index.html', self.registration.scope);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith('kotoba-shell-') && name !== CACHE_NAME).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  if (request.mode === 'navigate') {
    // The app is a static shell with local data. A cached shell is the fastest
    // and most dependable navigation response, including when a server fails.
    event.respondWith(caches.match(INDEX_URL.href).then((cached) => cached || fetch(request)));
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
});
