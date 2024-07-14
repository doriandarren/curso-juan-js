const nombreCache = 'apv-v3';
const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
];


//cuando se instala
self.addEventListener('install', e => {
    console.log('Instalado el Service Worker');

    console.log(e);

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos);
            })
    )

})



//Activar el SW
self.addEventListener('activate', e => {
    console.log('Service worker activado');

    e.waitUntil(
        caches.keys()
            .then( keys => {
                return Promise.all(
                    keys.filter( key => key !== nombreCache )
                        .map( key => caches.delete(key))
                )
            })
    )
    

})

//Evento fetch

self.addEventListener('fetch', e => {
    console.log('Fetch... ', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache;
            })
            .catch( () => caches.match('/error.html'))
    )

})