import React from 'react';
import TourList from './TourList';
import { useStaticQuery, graphql } from 'gatsby';

const getTours = graphql`
  query {
    tours: allContentfulTour {
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

const Tours = () => {
  const {
    tours: { edges }
  } = useStaticQuery(getTours);
  return <TourList edges={edges}></TourList>;
};

export default Tours;
