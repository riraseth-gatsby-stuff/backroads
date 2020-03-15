import React from 'react';
import styled from 'styled-components';

const StyledTitle = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  );
};

export default styled(StyledTitle)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    margin: 0 0.35rem;
  }
  @media (max-width: 576px) {
    span {
      display: block;
      margin: 0;
    }
  }
`;

// alternative syntax

// const StyledTitle = ({ title, subtitle }) => {
//   return (
//     <TitleWrapper>
//       <h4>
//         <span className="title">{title}</span>
//         <span>{subtitle}</span>
//       </h4>
//     </TitleWrapper>
//   );
// };

// const TitleWrapper = styled.div`
//   text-transform: uppercase;
//   font-size: 2.3rem;
//   margin-bottom: 2rem;
//   h4 {
//     text-align: center;
//     letter-spacing: 7px;
//     color: var(--primaryColor);
//   }
//   .title {
//     color: var(--mainBlack);
//   }
//   span {
//     margin: 0 0.35rem;
//   }
//   @media (max-width: 576px) {
//     span {
//       display: block;
//       margin: 0;
//     }
//   }
// `;
// export default StyledTitle;
