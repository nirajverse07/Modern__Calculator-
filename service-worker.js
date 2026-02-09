self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("niraj-calc-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});