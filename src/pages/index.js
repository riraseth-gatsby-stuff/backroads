import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
export default () => (
  <React.Fragment>
    <Layout>
      Hello world!
      <Link to="/blog/">Blog</Link>
    </Layout>
  </React.Fragment>
);
