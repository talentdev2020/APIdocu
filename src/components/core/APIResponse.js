import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const APIResponseWrapper = styled.div`
  background-color: #263238;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  height: 100%;
  padding-right: 1.5rem;
  boder-bottom: 1px solid grey !important;
`;

const APIResponseBody = styled.div`
  padding: 20px;
  padding-top: 10px;
  margin-bottom: 1rem;
  background-color: #11171a;
  overflow: auto;
  max-height: 200vh;
  color: #b1eab7 !important;
`;
const P = styled.p`
  padding-left: 15px;
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
  font-family: monospace;
  font-size: 12px;
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
  padding-right: 6px;
  padding-left: 6px;
  cursor: pointer;

  &:after {
    content: '+';
    ${(props) =>
      props.isExpand &&
      css`
        content: '-';
      `}
    cursor: pointer;
  }
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
  ${(props) =>
    props.success &&
    css`
      color: #00aa13;
    `}
  ${(props) =>
    props.active &&
    css`
      background-color: white;
    `}
  margin: 0 5px 5px 5px;
  border: 1px solid #07090b;
  border-radius: 5px;
  min-width: 60px;
  font-size: 0.9em;
  font-weight: bold;
`;
const error = ` {
  "success":false,
"error:":[{
    "code:3424,
    "message":"Authentication to the API occurs via HTTP Basic Auth"
  }
]}`;
const error1 = `
{
  "success":false,
  "error:":[{
    "code:3424,
    "message":"Example Invalid Request Description"
    }]
  }`;
const APIResponse = ({ request, response, isVisible }) => {
  const [body, setBody] = useState('');
  const [responseBody, setResponseBody] = useState('');
  const [bodytype, setBodyType] = useState('200');
  const [clipboard, setClipboard] = useState(response);
  const handleClick = useCallback((index, source) => {
    const temp =
      source &&
      source.map((item, i) => {
        item.isMarked = false;
        if (index === i) item.isExpand = !item.isExpand;
        return item;
      });
    setBody(temp);
    const data = makeResponse(temp, 0, 0);
    setResponseBody(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const expandAll = () => {
    const newData = body.map((item) => {
      item.isExpand = true;
      item.isMarked = false;
      return item;
    });
    setBody(newData);
    const data = makeResponse(newData, 0, 0);
    setResponseBody(data);
  };
  const collapseAll = () => {
    setResponseBody(['{', '...', '}']);
  };

  const makeResponse = useCallback(
    (source, start, depth, isFirst = false) => {
      let childflag = 0;
      return (
        source &&
        source.map((item, index) => {
          if (index < start) return <></>;
          if (childflag === 1) return <></>;

          if (item.isMarked) return <></>;
          let left = 16 * depth;
          item.isMarked = true;
          if (isFirst && depth >= 1) item.isExpand = false;
          if (
            (item.name.includes('{') || item.name.includes('[')) &&
            !item.name.includes('{{')
          ) {
            return (
              <div key={index + 'eew' + item.name}>
                <Li key={index + start + 'li' + item.name}>
                  <div
                    style={{
                      display: 'flex',
                      position: 'relative',
                      paddingLeft: left + 'px',
                    }}
                  >
                    {index !== 0 && (
                      <Collapse
                        isExpand={item.isExpand}
                        onClick={(e) => handleClick(index, source)}
                      />
                    )}
                    <ResponsiveSpan>{item.name}</ResponsiveSpan>
                  </div>

                  <ul
                    className={item.isExpand ? '' : 'hide'}
                    key={index + 'ul' + item.name}
                  >
                    {makeResponse(source, index + 1, depth + 1, isFirst)}
                  </ul>
                </Li>
                <Li
                  key={index + start + 'res' + item.name}
                  style={{ paddingLeft: left + 'px' }}
                >
                  <ResponsiveSpan key={index + '2E'}>
                    {item.name.includes('{') ? '}' : ']'}
                  </ResponsiveSpan>
                </Li>
              </div>
            );
          }
          if (
            (item.name.includes('}') || item.name.includes(']')) &&
            !item.name.includes('}}')
          ) {
            childflag = 1;
            left = 16 * (depth - 1);
            return <></>;
            //  parentflag = 0;
          }
          //  if (parentflag === 1) return <></>;
          return (
            <Li
              key={index + start + 'res' + item.name}
              style={{ paddingLeft: left + 'px' }}
            >
              <ResponsiveSpan>{item.name}</ResponsiveSpan>
            </Li>
          );
        })
      );
    },
    [handleClick],
  );

  useEffect(() => {
    let string = '';
    let source = response;
    if (bodytype === '400') {
      source = error;
    } else if (bodytype === '401') {
      source = error1;
    }
    string =
      source &&
      source
        .split('{{')
        .join('***')
        .split('}}')
        .join('___')
        .split('],')
        .join(']')

        .split(',')
        .join(', ')
        .split('{')
        .join('{, ')
        .split('}')
        .join(', }')
        .split('[')
        .join('[, ')
        .split(']')
        .join(', ], ')
        .split('***')
        .join('{{')
        .split('___')
        .join('}}')
        .split(', ');
    string =
      string &&
      string.filter((item) => {
        return item !== '';
      });
    string && string.push('}');

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
    const data = makeResponse(newData, 0, 0, false);
    setResponseBody(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, bodytype]);

  const changeContentResponse = (type) => {
    if (type === '200') setClipboard(response);
    else if (type === '400') setClipboard(error);
    else setClipboard(error1);
    setBodyType(type);
  };

  return (
    <APIResponseWrapper key="random">
      {!isVisible && request && (
        <div>
          <strong style={{ fontSize: '1.3rem', color: 'white' }}>
            Request Example
          </strong>
          <br />
          <br />
        </div>
      )}

      {request && (
        <APIResponseBody>
          <JsonWrapper>
            <JsonWrapperHeader>Content Type</JsonWrapperHeader>application/json
          </JsonWrapper>
          <CopyBoard>
            <CopyToClipboard text={request}>
              <CopyButton key="copy">{request}</CopyButton>
            </CopyToClipboard>
          </CopyBoard>
          <P dangerouslySetInnerHTML={{ __html: request }}></P>
        </APIResponseBody>
      )}

      {!isVisible && (
        <div>
          <strong style={{ fontSize: '1.3rem', color: 'white' }}>
            Response Example
          </strong>
          <br />
          <div>
            <ResponseButton
              success
              active={bodytype === '200' ? true : false}
              onClick={() => changeContentResponse('200')}
            >
              200
            </ResponseButton>
            <ResponseButton
              active={bodytype === '400' ? true : false}
              onClick={() => changeContentResponse('400')}
            >
              400
            </ResponseButton>
            <ResponseButton
              active={bodytype === '401' ? true : false}
              onClick={() => changeContentResponse('401')}
            >
              401
            </ResponseButton>
          </div>
        </div>
      )}

      {body && (
        <APIResponseBody key="ee">
          <JsonWrapper>application/json</JsonWrapper>
          <CopyBoard>
            <CopyToClipboard text={clipboard}>
              <CopyButton>Copy</CopyButton>
            </CopyToClipboard>
            <CopyButton onClick={expandAll}>Expand All</CopyButton>
            <CopyButton onClick={collapseAll}>Collapse All</CopyButton>
          </CopyBoard>
          {/* <div>{responseBody ? responseBody : makeResponse(0, 0)}</div> */}
          {responseBody}
          {/* <P dangerouslySetInnerHTML={{ __html: body }}></P> */}
        </APIResponseBody>
      )}
    </APIResponseWrapper>
  );
};
export default APIResponse;
