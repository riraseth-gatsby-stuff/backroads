import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styles from '../css/single-blog.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/SEO';

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json }
  } = data.post;
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return (
          <div>
            <img
              src={node.data.target.fields.file['en-US'].url}
              alt=""
              width="400"
            />
            <p>Images provided by jane doe</p>
          </div>
        );
      },
      'embedded-entry-block': node => {
        const { title, image, text } = node.data.target.fields;
        return (
          <div>
            <h1>this is other post: {title['en-US']}</h1>
            <img
              src={image['en-US'].fields.file['en-US'].url}
              alt=""
              width="400"
            />
            {documentToReactComponents(text['en-US'])}
          </div>
        );
      }
    }
  };
  return (
    <Layout>
      <SEO title={title} description="this is blog description"></SEO>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`;

export default Blog;
