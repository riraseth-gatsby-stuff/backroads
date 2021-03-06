import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO';

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="this is contact description"></SEO>
      <StyledHero img={data.connectBcg.childImageSharp.fluid}></StyledHero>
      <Contact></Contact>
    </Layout>
  );
};

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default contact;
