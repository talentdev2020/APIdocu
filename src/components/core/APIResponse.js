import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const APIResponseWrapper = styled.div`
  background-color: #263238;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  height: 100%;
  boder-bottom: 1px solid grey !important;
`;

const APIResponseBody = styled.div`
  padding: 20px;
  padding-top: 10px;
  margin-bottom: 1rem;
  background-color: #11171a;
  color: #b1eab7 !important;
`;
const P = styled.p`
  padding-left: 15px;
`;
const ResponseButton = styled.button`
  padding: 5px 10px;
  display: inline-block;
  background-color: #11171a;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  text-align: center;
  outline: none;
  color: red;
  margin: 0 5px 5px 5px;
  border: 1px solid #07090b;
  border-radius: 5px;
  min-width: 60px;
  font-size: 0.9em;
  font-weight: bold;
  margin-top: 1rem;
  &:focus {
    background-color: white;
  }
  ${(props) =>
    props.success &&
    css`
      color: green;
    `}
`;
const JsonWrapper = styled.div`
  color: white !important;
  margin: 1rem 0;
  background-color: rgba(38, 50, 56, 0.4);
  padding: 1rem;
  position: relative;
`;
const JsonWrapperHeader = styled.div`
  position: absolute;
  top: -12px;
  color: #8aab93 !important;
  font-weight: bold;
`;
const CopyBoard = styled.div`
  text-align: right !important;
  color: #8aab93 !important;
  &:hover {
    color: white !important;
  }
`;
const ResponsiveSpan = styled.div`
  padding-left: 20px;
  color: #629e35 !important;
`;
const CopyButton = styled.span`
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover {
    background-color: #333333;
  }
`;
const Li = styled.li`
  list-style-type: none;
  padding: unset;
`;
const Collapse = styled.div`
  top: 1px;
  left: -1.5em;
  padding-right: 6px;
  padding-left: 6px;
  &:after {
    content: '+';
    ${(props) => props.isExpand && 'content: ' - ';'}
    cursor: pointer;
  }
`;
function handleClick(index) {}
const APIResponse = ({ response, isVisible }) => {
  const [body, setBody] = useState('');
  const [bodytype, setBodyType] = useState('200');
  const [requestBody, setRequestBody] = useState('');
  const [copy, setCopied] = useState('Copy');
  const [requestcopy, setRequestCopied] = useState('Copy');

  useEffect(() => {
    let string = '';
    if (bodytype === '200') {
      string =
        response &&
        response
          .split('},')
          .join('}')
          .split('],')
          .join(']')
          .split(',')
          .join(', ')
          .split('{')
          .join('{, ')
          .split('}')
          .join('}, ')
          .split(', ');
    }
    let depth = 0;
    let newData =
      string &&
      string.map((item) => {
        if (item.includes('[') || item.includes('{')) {
          item = { name: item, isExpand: depth > 4 ? false : true };
          depth++;
        } else if (item.includes(']') || item.includes('}')) {
          item = { name: item + ' ,', isExpand: false };
          depth--;
        } else item = { name: item + ' ,' };
        return item;
      });
    setBody(newData);
  }, [response, bodytype]);
  const Test = (start, depth) => {
    let childflag = 0;
    let parentflag = 0;
    return body.map((item, index) => {
      if (childflag === 1) return <></>;
      if (index <= start) return <></>;
      // if (item.isMarked) return <></>;
      const left = 16 * depth;

      console.log(item.name);
      if (item.name.includes('{') || item.name.includes('[')) {
        parentflag = 1;
        body[index].isMarked = true;
        return (
          <Li key={index + 'li' + item.name}>
            <div
              style={{
                display: 'flex',
                position: 'relative',
                paddingLeft: left + 'px',
              }}
            >
              <Collapse
                isExpand={item.isExpand}
                onClick={(e) => handleClick(index)}
              />
              <ResponsiveSpan>{item.name}</ResponsiveSpan>
            </div>
            <ul>{depth < 4 ? Test(index, depth + 1) : ''}</ul>
          </Li>
        );
      }
      if (item.name.includes('}') || item.name.includes(']')) {
        childflag = 1;
        parentflag = 0;
      }
      if (parentflag === 1) return <></>;
      body[index].isMarked = true;
      return (
        <Li
          key={index + 'res' + item.name}
          style={{ paddingLeft: left + 'px' }}
        >
          <ResponsiveSpan>{item.name}</ResponsiveSpan>
        </Li>
      );
    });
  };
  useEffect(() => {
    const string =
      response &&
      response
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
    setRequestBody(string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeContentResponse = (type) => {
    setBodyType(type);
  };
  const setCopy = () => {
    setCopied('Copied');
    setTimeout(relaseCopied, 3000);
  };
  const setRequestCopy = () => {
    setRequestCopied('Copied');
    setTimeout(relaseCopied, 3000);
  };
  const relaseCopied = () => {
    setCopied('Copy');
    setRequestBody('Copy');
  };
  return (
    <APIResponseWrapper>
      {!isVisible && (
        <div>
          <strong style={{ fontSize: '1.3rem', color: 'white' }}>
            Request Example
          </strong>
          <br />
          <br />
        </div>
      )}

      {requestBody && (
        <APIResponseBody>
          <JsonWrapper>
            <JsonWrapperHeader>Content Type</JsonWrapperHeader>application/json
          </JsonWrapper>
          <CopyBoard>
            <CopyToClipboard text={requestBody} onCopy={setRequestCopy}>
              <CopyButton>{requestcopy}</CopyButton>
            </CopyToClipboard>
            <CopyButton>Expand All</CopyButton>
            <CopyButton>Collapse All</CopyButton>
          </CopyBoard>
          <P dangerouslySetInnerHTML={{ __html: requestBody }}></P>
        </APIResponseBody>
      )}

      {!isVisible && (
        <div>
          <strong style={{ fontSize: '1.3rem', color: 'white' }}>
            Response Example
          </strong>
          <br />
          <ResponseButton success onClick={() => changeContentResponse('200')}>
            200
          </ResponseButton>
          <ResponseButton onClick={() => changeContentResponse('400')}>
            400
          </ResponseButton>
          <ResponseButton onClick={() => changeContentResponse('401')}>
            401
          </ResponseButton>
        </div>
      )}

      {body && (
        <APIResponseBody>
          <JsonWrapper>application/json</JsonWrapper>
          <CopyBoard>
            <CopyToClipboard text={body} onCopy={setCopy}>
              <CopyButton>{copy}</CopyButton>
            </CopyToClipboard>
            <CopyButton>Expand All</CopyButton>
            <CopyButton>Collapse All</CopyButton>
          </CopyBoard>
          {Test(0, 1)}
          {/* <P dangerouslySetInnerHTML={{ __html: body }}></P> */}
        </APIResponseBody>
      )}
    </APIResponseWrapper>
  );
};
export default APIResponse;
