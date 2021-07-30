const axios = require(`axios`)

exports.createPages = ({ actions: { createPage } }) => {
  return axios
    .get('https://geo.api.gouv.fr/communes?fields=departement,codesPostaux')
    .then((res) => res.data)
    .then((res) =>
      res.forEach((place) => {
        place.departement &&
          createPage({
            path: `/place/${place.code}/${place.nom
              .toLowerCase()
              .replace(' ', '-')
              .replace(`'`, '-')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')}/`,
            component: require.resolve('./src/templates/place.js'),
            context: { place },
          })
      })
    )
}
