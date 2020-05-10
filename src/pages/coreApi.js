import React from 'react';
import LeftSide from '../components/core/LeftSide';
import Content from '../components/core/Content';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;
const CoreAPI = () => {
  return (
    <Wrapper>
      <LeftSide />
      <Content />
    </Wrapper>
  );
};

export default CoreAPI;
