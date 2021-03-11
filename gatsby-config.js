module.exports = {
  siteMetadata: {
    title: `Recosante`,
    author: `Recosante`,
    description: `Une recommandation quotidienne pour vous protéger des impacts de la qualité de l'air sur votre santé.`,
    siteUrl: `https://recosante.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-use-query-params',
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
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
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 784,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          { resolve: 'gatsby-remark-external-links' },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    /* {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '128',
        matomoUrl: 'https://stats.data.gouv.fr',
        siteUrl: 'https://recosante.beta.gouv.fr',
      },
    },*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Recosante`,
        short_name: `Recosante`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000091`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
  ],
}
