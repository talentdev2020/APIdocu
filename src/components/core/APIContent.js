import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import styled, { css } from 'styled-components';

import SuccessResponse from './SuccessResponse';
import {
  Param,
  ParamBody,
  ParamDescription,
  ParamDescriptionTitle,
  ParamTitle,
} from './SuccessResponse';

const GreenWrapper = styled.span`
  font-size: 0.929em;
  line-height: 20px;
  background-color: #6bbd5b;
  color: #ffffff;
  padding: 3px 10px;
  text-transform: uppercase;
  margin: 0;
  margin-right: 1rem;
  ${(props) =>
    props.post &&
    css`
      background-color: #248fb2;
    `}
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
const Description = styled.p`
  color: #969696;
`;
const MainCategory = styled.h3`
  color: #01005a;
`;
const SubCategory = styled.h3`
  color: #01525a;
`;
const APIContent = ({ data }) => {
  return (
    <>
      {data.type === 'parent' && <MainCategory>{data.name}</MainCategory>}
      {data.type === 'subparent' && <SubCategory>{data.name}</SubCategory>}
      {data.type === 'api' && (
        <>
          <h3>{data.name}</h3>
          <ApiBody>
            <GreenWrapper post={data.request.method === 'GET' ? false : true}>
              {data.request.method}
            </GreenWrapper>
            {data.request.url.raw ? data.request.url.raw : data.request.url}
          </ApiBody>
        </>
      )}

      <Description>
        {data.type === 'api' ? data.request.description : data.description}
      </Description>
      {data.type === 'api' && (
        <>
          {' '}
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
          {data.request.url.query &&
            data.request.url.query.map((item, index) => (
              <Param key={index + 'pa' + item.value}>
                {' '}
                <ParamTitle>{item.key}</ParamTitle>
                <ParamBody>
                  <ParamDescriptionTitle>{item.value}</ParamDescriptionTitle>
                  <ParamDescription>{item.description}</ParamDescription>
                </ParamBody>
              </Param>
            ))}
          <br />
          <p>Responses</p>
          {/* for 200 */}
          <SuccessResponse success={true} />
          <SuccessResponse success={false} />
        </>
      )}
    </>
  );
};

export default APIContent;
