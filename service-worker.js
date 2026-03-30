const CACHE_NAME = "kiki-app-v1";
const CACHE = "app-v1";

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js",
        "/foto1.jpg",
        "/foto2.jpg",
        "/foto3.jpg",
        "/musica.mp3",
        "/video.mp4"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});