require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'BackRoads',
    description:
      'Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure',
    author: '@Łukasz Zabuski',
    twitterUsername: '@riraseth',
    image: '/defaultBcg.jpeg',
    siteUrl: 'https://adoring-villani-67878f.netlify.com'
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
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://adoring-villani-67878f.netlify.com',
        sitemap: 'https://adoring-villani-67878f.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`
  ]
};
