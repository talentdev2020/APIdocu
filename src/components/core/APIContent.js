import React from 'react';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

const ParamDescription = styled.div`
  color: #cfccea !important;
`;
const ParamTitle = styled.div`
  font-weight: 500;
  display: inline-block;
  width: 10rem;
`;

const GreenWrapper = styled.span`
  font-size: 0.929em;
  line-height: 20px;
  background-color: #6bbd5b;
  color: #ffffff;
  padding: 3px 10px;
  text-transform: uppercase;
  margin: 0;
  margin-right: 1rem;
`;
const ParamDescriptionTitle = styled.div`
  color: #7369ca !important;
`;
const ParamBody = styled.div`
  border-bottom: 1px solid #cfccea !important;
  width: calc(100% - 10rem);
`;
const Param = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const ApiBody = styled.div`
  margin-bottom: 15px;
  word-break: break-all;
  border: 1px solid #e6e6e6;
  padding: 6px 10px;
  border-radius: 3px;
  font-size: 12px;
  color: #282828;
  background-color: #f8f8f8;
`;
const APIContent = () => {
  return (
    <>
      <h3>Get Card Order List</h3>
      <ApiBody>
        <GreenWrapper>Get</GreenWrapper>
        /api/v2/cardOrders?and[status][][eq]=verified&limit=2
      </ApiBody>
      <p>
        Get a list of card ordersGet a list of card ordersGet a list of card
        orders
      </p>
      <span style={{ color: 'grey' }}>HEADERS</span>
      <Divider />
      <br />
      <div>
        <ParamTitle>Authorization</ParamTitle> {'{{authorization}}'}
      </div>
      <br />
      <span style={{ color: 'grey' }}>PARAMS</span>
      <Divider />
      <br />
      <Param>
        <ParamTitle>and[status][][eq]</ParamTitle>
        <ParamBody>
          <ParamDescriptionTitle>verified</ParamDescriptionTitle>
          <ParamDescription>
            Optional parameter to filter by status
          </ParamDescription>
        </ParamBody>
      </Param>
      <div>
        <ParamTitle>limit</ParamTitle> 2
        <br />
        <ParamTitle> &nbsp;</ParamTitle>{' '}
        <ParamDescription>
          Optional parameter to limit the results by 2
        </ParamDescription>
      </div>
    </>
  );
};

export default APIContent;
