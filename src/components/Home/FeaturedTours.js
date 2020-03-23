import React from 'react';
import Tour from '../Tours/Tour';
import { graphql, useStaticQuery } from 'gatsby';
import StyledTitle from '../StyledTitle';
import styles from '../../css/items.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  // const {
  //   featuredTours: { edges }
  // } = useStaticQuery(getTours);
  // const tours = edges;
  const data = useStaticQuery(getTours);
  const tours = data.featuredTours.edges;

  return (
    <section className={styles.tours}>
      <StyledTitle title="featured" subtitle="tours"></StyledTitle>
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} {...node}></Tour>;
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  );
};

export default FeaturedTours;
