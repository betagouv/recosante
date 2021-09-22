module.exports = {
  siteMetadata: {
    title: `Recosante`,
    author: `Recosante`,
    description: `Une recommandation quotidienne pour vous protéger des impacts de la qualité de l'air sur votre santé.`,
    siteUrl: `https://recosante.beta.gouv.fr`,
    image: 'metaimage.jpg',
    twitterUsername: 'recosante',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-external-links' }],
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-use-query-params',
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Marianne:n3,n5,n7,n8'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    /* {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`IntersectionObserver`],
      },
    },*/

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/texts`,
        name: `texts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '157',
        matomoUrl: 'https://stats.data.gouv.fr',
        siteUrl: 'https://recosante.beta.gouv.fr',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Recosante`,
        short_name: `Recosante`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000091`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
