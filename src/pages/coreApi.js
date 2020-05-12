import React from 'react';
import CoreAPIContainer from '../containers/core/coreApi';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CoreAPI = () => {
  return (
    <Wrapper>
      <CoreAPIContainer />
    </Wrapper>
  );
};

export default CoreAPI;
