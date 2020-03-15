import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
const blog = props => {
  console.log(props);
  return (
    <Layout>
      hello from blog page
      <Link to="/">Home</Link>
      <h1>title: {props.data.site.siteMetadata.title}</h1>
    </Layout>
  );
};

// works only in pages folder
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default blog;
