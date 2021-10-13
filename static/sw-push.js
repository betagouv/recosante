self.addEventListener('push', function (event) {
  console.log('push', event)

  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return
  }

  /*const data = event.data
    ? event.data.json()
    : { title: 'Découvrez les données Recosanté' }*/

  const data = {
    title: 'Découvrez les données Recosanté',
    body: `Indice de qualité de l'air : Moyen`,
    link: 'https://recosante.beta.gouv.fr',
  }

  const promiseChain = self.registration.showNotification(data.title, {
    body: data.body,
    data: data.link,
    icon: '/favicon.png',
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
  console.log('notificationclick')
  self.clients.openWindow(event.notification.data)
})
