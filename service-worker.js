self.addEventListener("install", function(e) {
  console.log("Service Worker instalado en Radio Chécheres EN VIVO");
});

self.addEventListener("fetch", function(e) {
  // Solo escucha, no almacena nada en caché (modo liviano)
});