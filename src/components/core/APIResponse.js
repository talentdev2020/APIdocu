import React from 'react';
import styled, { css } from 'styled-components';
const APIResponseWrapper = styled.div`
  background-color: #263238;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  height: 100%;
  boder-bottom: 1px solid grey;
`;
const APIResponseBody = styled.div`
  padding: 20px;
  background-color: #000;
  color: #b1eab7 !important;
`;
const P = styled.p`
  padding-left: 15px;
`;
const ResponseButton = styled.span`
  padding: 5px 10px;
  display: inline-block;
  background-color: #11171a;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-align: center;
  outline: none;
  color: #b3b3b3;
  margin: 0 5px 5px 5px;
  border: 1px solid #07090b;
  border-radius: 5px;
  min-width: 60px;
  font-size: 0.9em;
  font-weight: bold;
  margin: 2rem 1rem;
  ${(props) =>
    props.success &&
    css`
      background-color: green;
      color: white;
    `}
`;
const JsonWrapper = styled.div`
  color: white !important;
  margin: 1rem 0;
`;
const APIResponse = ({ body }) => {
  const string =
    body &&
    body
      .split('{')
      .join('{<div class="response">')
      .split('}')
      .join('</div>}')
      .split('<div class="response">')
      .join('<div class="response">')
      .split('</div>')
      .join('</div>')
      .split(',')
      .join(',<br/>');
  //const string  = body.split("{").join(",").split("}").join(",").split(",");
  return (
    <APIResponseWrapper>
      {body && (
        <div>
          <strong style={{ fontSize: '1.3rem', color: 'white' }}>
            Response Example
          </strong>
          <br />
          <ResponseButton success>200 </ResponseButton>
          <ResponseButton>400</ResponseButton>
          <ResponseButton>401</ResponseButton>
        </div>
      )}

      {body && (
        <APIResponseBody>
          <JsonWrapper>application/json</JsonWrapper>
          <P dangerouslySetInnerHTML={{ __html: string }}></P>
          {
            //   /* {body &&
            //   string.map((line, index) => {
            //     return (
            //       <P
            //         key={line + '_' + index}
            //         dangerouslySetInnerHTML={{ __html: line }}
            //       ></P>
            //     );
            //   })} */
          }
        </APIResponseBody>
      )}
    </APIResponseWrapper>
  );
};
export default APIResponse;
