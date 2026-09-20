/* Service Worker – Offline-Cache für die HNO Lernkarten.
   Bei jeder Änderung an einer App-Datei CACHE hochzählen, damit Geräte die neue Version holen. */
var CACHE = 'hno-lernkarten-v0.3.34';
var ASSETS = [
  './',
  'index.html',
  'style.css',
  'js/main.js',
  'js/mobile-selects.js',
  'js/data.js',
  'js/catalog.js',
  'js/lang.js',
  'js/i18n.js',
  'js/utils.js',
  'js/storage.js',
  'js/nav.js',
  'js/glossar.js',
  'js/karten.js',
  'js/quiz.js',
  'js/stats.js',
  'js/pwa.js',
  'js/about.js',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Cache zuerst, im Hintergrund aktualisieren (stale-while-revalidate) */
self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Styles online frisch laden; offline auf die gespeicherte CSS-Datei zurückfallen.
  if (req.destination === 'style' || new URL(req.url).pathname.endsWith('.css')) {
    event.respondWith((async function () {
      var cache = await caches.open(CACHE);
      try {
        var response = await fetch(req, { cache: 'no-store' });
        if (!response.ok) throw new Error('Stylesheet nicht verfügbar');
        try { await cache.put(req, response.clone()); } catch (_) { /* frische Antwort trotzdem verwenden */ }
        return response;
      } catch (_) {
        var saved = await cache.match(req, { ignoreSearch: true });
        return saved || Response.error();
      }
    })());
    return;
  }
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
        return res;
      }).catch(function () { return hit || caches.match('index.html'); });
      return hit || net;
    })
  );
});
