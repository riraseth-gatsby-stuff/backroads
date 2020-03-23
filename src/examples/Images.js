import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import img from '../images/connectBcg.jpeg';
import Img from 'gatsby-image';

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }

    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
// maxWidth: xxx creates images that are close in size to xxx, default is 600px
// image will always be 100% size of the container

const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data);
  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="" className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed}></Img>
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid}></Img>
        <div className="fluid">
          <Img fluid={data.fluid.childImageSharp.fluid}></Img>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 62px auto 10rem auto;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  .fluid {
    width: 200px;
  }
  @media (min-width: 922px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }
`;

export default Images;
