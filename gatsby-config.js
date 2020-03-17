/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'BackRoads',
    description:
      'Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure',
    author: '@Łukasz Zabuski'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aa6lmvvj10ja`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `coEg-s-TeNE4MIZnenmUau8zdPNpZZQc5LqeJ9dW6qU`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`
  ]
};
