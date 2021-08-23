const axios = require(`axios`)

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const pages = graphql(
    `
      {
        allMdx(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    console.log('result', result)
    result.data.allMdx.edges.forEach((post) => {
      console.log('post', post)
      console.log('slug', post.node.slug)
      createPage({
        path: `${post.node.slug}`,
        component: require.resolve('./src/templates/page.js'),
        context: {
          slug: post.node.slug,
        },
      })
    })
  })

  const places = axios
    .get('https://geo.api.gouv.fr/communes?fields=departement,codesPostaux')
    .then((res) => res.data)
    .then((res) =>
      res.forEach((place) => {
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

  return Promise.all([pages, places])
}
