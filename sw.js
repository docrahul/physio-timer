const VERSION = 'v1.0';
const CACHE = 'physio-timer-' + VERSION;
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).then(function(res) {
      const copy = res.clone();
      caches.open(CACHE).then(function(cache) { cache.put(e.request, copy); });
      return res;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});
