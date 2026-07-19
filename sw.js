// Minimal service worker — exists solely to satisfy Chrome's PWA installability
// requirement (which needs a registered service worker with a fetch handler).
// Deliberately does NO caching, so the site is never served stale during
// active development. Every request passes straight through to the network.

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
