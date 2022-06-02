const formatPlaceUrl = function (place) {
  return `/place/${place.code}/${place.nom
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll('\'', '-').replaceAll('\u2019', '-')
    .replaceAll('\u0153', 'oe')
    .normalize('NFD').replaceAll(/[\u0300-\u036f]/g, '')}/`
}
module.exports.formatPlaceUrl = formatPlaceUrl