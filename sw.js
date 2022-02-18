self.addEventListener('install', event => {
    event.waitUntil(caches.open('App-name')
        .then(cache => cache.addAll(['/', 'index.html', 'style.css','manifest.json','changeIcon.png', 'circle-filled.png', 'circle.png', 'database.js','icon.png', 'loadResources.js', 'menu.png', 'openpages.js', 'softwareupdate.js', 'splash.png', 'timetable.js', 'events.js', 'homework.js', 'login.js', 'onload.js', 'setup.js', '']))
        .then(() => self.skipWaiting()));
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(response => response || fetch(event.request)));
});