import React from 'react';
import BlogCard from './BlogCard';
import StyledTitle from '../StyledTitle';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../../css/blog.module.css';

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          id: contentful_id
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

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);

  return (
    <section className={styles.blog}>
      <StyledTitle title="our" subtitle="blogs"></StyledTitle>
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} {...node}></BlogCard>;
        })}
      </div>
    </section>
  );
};

export default BlogList;
