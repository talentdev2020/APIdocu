import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';

import styled, { css } from 'styled-components';
const ResponseBody = styled.div`
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 1rem;
  line-height: 1.5em;

  cursor: pointer;
  color: unset !important;
  background-color: rgba(229, 57, 53, 0.1);
  color: #e53935 !important;
  ${(props) =>
    props.success &&
    css`
      background-color: rgba(0, 170, 19, 0.1);
      color: #00aa13 !important;
    `}
  & svg {
    height: 1.5em;
    width: 1.5em;
    transform: rotateZ(-90deg);
  }
  ${(props) =>
    props.clicked &&
    css`
      & svg {
        transform: rotateZ(0deg);
      }
    `}
`;
const ParamDescription = styled.div`
  color: #cfccea !important;
`;
const ParamTitle = styled.div`
  font-weight: 300;
  display: inline-block;
  width: 10rem;
  color: black !important;
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
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const SuccessResponse = (props) => {
  const [success, setSuccess] = useState(false);

  const showResponse = () => {
    setSuccess(!success);
  };
  return (
    <div>
      <ResponseBody
        success={props.success}
        clicked={success}
        onClick={() => showResponse()}
      >
        <svg
          fill="currentColor"
          version="1.1"
          viewBox="0 0 24 24"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
        </svg>
        200{' '}
      </ResponseBody>
      {props.success && success && (
        <div style={{ paddingLeft: '10px' }}>
          <span style={{ color: 'grey', marginRight: '20px' }}>
            RESPONSE SCHEMA:
          </span>
          <span style={{ color: 'black' }}>application/json</span>
          <Divider />
          <Param>
            <ParamTitle>and[status][][eq]</ParamTitle>
            <ParamBody>
              <ParamDescriptionTitle>verified</ParamDescriptionTitle>
              <ParamDescription>
                Optional parameter to filter by status
              </ParamDescription>
            </ParamBody>
          </Param>
        </div>
      )}
    </div>
  );
};

export default SuccessResponse;
export {
  Param,
  ParamBody,
  ParamDescription,
  ParamDescriptionTitle,
  ParamTitle,
};
