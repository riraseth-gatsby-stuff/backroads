import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Tours from '../components/Tours/Tours';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

const tours = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" description="this is tours description"></SEO>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Tours></Tours>
    </Layout>
  );
};
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
export default tours;
