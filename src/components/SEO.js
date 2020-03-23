import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
const getSeo = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { siteDesc, siteTitle, siteUrl, image, twitterUsername }
    }
  } = useStaticQuery(getSeo);

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc}></meta>
      <meta name="image" content={image}></meta>
    </Helmet>
  );
};

export default SEO;
