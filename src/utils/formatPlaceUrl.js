const formatPlaceUrl = function (place) {
  return `/place/${place.code}/${place.nom
    .toLowerCase()
    .replace(' ', '-')
    .replace('\'', '-').replace('\u2019', '-')
    .replace('\u0153', 'oe')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')}/`
}
module.exports.formatPlaceUrl = formatPlaceUrl