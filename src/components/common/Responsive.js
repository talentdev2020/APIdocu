import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 1200px;
  margin: 0 auto;
  font-family: Montserrat;

  @media (max-width: 1024px) and (min-width: 768) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: calc(100% - 30px);
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
