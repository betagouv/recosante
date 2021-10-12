self.addEventListener('push', function (event) {
  if (!(self.Notification && self.notification.permission === 'granted')) {
    return
  }

  data = event.data
    ? event.data.json()
    : { title: 'Découvrez les données Recosanté' }

  const promiseChain = self.registration.showNotification(data.title, {
    body: data.body,
    data: data.link,
    icon: 'favicon.png',
    actions: [
      {
        action: data.link,
        title: 'Voir tous les indicateurs',
      },
    ],
    requireInteraction: true,
  })

  event.waitUntil(promiseChain)
})
self.addEventListener('notificationclick', function (event) {
  self.clients.openWindow(event.notification.data)
})
