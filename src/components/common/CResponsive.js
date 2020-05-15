import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 850px;

  margin: 0 auto;
  font-family: Montserrat;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const CResponsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default CResponsive;
