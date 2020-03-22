import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../css/blog.module.css';
import BlogCard from '../components/Blog/BlogCard';
import StyledTitle from '../components/StyledTitle';
// we're using props because we're passing numPages and currentPage from createPage in gatsby-node.js
const Blog = props => {
  const { data } = props;
  return (
    <Layout>
      <section className={styles.blog}>
        <StyledTitle title="latest" subtitle="posts"></StyledTitle>
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} {...node}></BlogCard>;
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPosts($skip: Int, $limit: Int) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default Blog;
