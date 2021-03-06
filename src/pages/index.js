import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';
import FeaturedTours from '../components/Home/FeaturedTours';
import SEO from '../components/SEO';
//with export we can skip useStaticQuery, it's a page query, work only in pages
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

export default ({ data }) => {
  // const data = useStaticQuery(query);
  return (
    <Layout>
      <SEO title="Home" description="this is home description"></SEO>
      <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, voluptatibus!"
        >
          <AniLink fade to="/tours" className="btn-white">
            explore tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About></About>
      <Services></Services>
      <FeaturedTours></FeaturedTours>
    </Layout>
  );
};
