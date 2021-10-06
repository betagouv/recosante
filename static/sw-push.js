self.addEventListener('push', function (event) {
  if (!(self.Notification && self.notification.permission === 'granted')) {
    return
  }

  data = event.data ? event.data.json() : {}

  const notification = new Notification(data.title || 'Recosanté', {
    body: data.message || 'Découvrez les données Recosanté',
    tag: 'recosante',
    icon: 'favicon.png',
  })

  notification.addEventListener('click', function () {
    if (clients.openWindow) {
      clients.openWindow(data.link || 'https://recosante.gtsb.io')
    }
  })
})
