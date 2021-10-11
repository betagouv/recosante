const axios = require(`axios`)
const { apiUrl } = require("./src/utils/apiUrl")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) =>
  axios
    .get(`${apiUrl}/_application_server_key`)
    .then((res) => res.data)
    .then((data) =>
      createNode({
        application_server_key: data.application_server_key,
        url: data.html_url,
        id: `application-server-key`,
        parent: null,
        children: [],
        internal: {
          type: `ApplicationServerKey`,
          contentDigest: createContentDigest(data),
        },
      })
    )

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
    result.data.allMdx.edges.forEach((post) => {
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
    .get(
      'https://geo.api.gouv.fr/communes/?fields=departement,codesPostaux,population'
    )
    .then((res) => res.data)
    .then((res) =>
      res.forEach((place) => {
        place.departement &&
          createPage({
            path: `/place/${place.code}/${place.nom
              .toLowerCase()
              .replace(/\s/g, '-')
              .replace(/'/g, '-')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')}/`,
            component: require.resolve('./src/templates/place.js'),
            context: { place },
            defer: place.population < 20000,
          })
      })
    )

  return Promise.all([pages, places])
}
