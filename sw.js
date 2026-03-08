self.addEventListener('install', (e) => self.skipWaiting());

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/index.html'));
});

self.addEventListener('push', function(event) {
  const data = event.data ? event.data.text() : 'New notification on ChatUp';
  event.waitUntil(
    self.registration.showNotification('ChatUp', {
      body: data,
      icon: 'logo.png',
      badge: 'logo.png',
      vibrate: [200, 100, 200]
    })
  );
});