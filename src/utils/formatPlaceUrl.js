export default function formatPlaceUrl(place) {
  return '/place/75056/paris/'
  /*return `/place/${place.code}/${place.nom
    .toLowerCase()
    .replace(' ', '-')
    .replace(`'`, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')}/`*/
}
