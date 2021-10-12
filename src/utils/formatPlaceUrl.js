export default function formatPlaceUrl(place) {
  return `/place/${place.code}/${place.nom
    .toLowerCase()
    .replace(' ', '-')
    .replace(`'`, '-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')}/`
}
