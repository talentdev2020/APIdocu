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

const APIResponse = ({ request, response, isVisible }) => {
  const [body, setBody] = useState('');
  const [responseBody, setResponseBody] = useState('');
  const [bodytype, setBodyType] = useState('200');

  const handleClick = (index) => {
    const temp = body.map((item, i) => {
      item.isMarked = false;
      if (index === i) item.isExpand = !item.isExpand;
      return item;
    });
    setBody(temp);
    const data = makeResponse(0, 0);
    console.log(data);
    setResponseBody(data);
  };

  const expandAll = () => {
    const newData = body.map((item) => {
      item.isExpand = true;
      item.isMarked = false;
      return item;
    });
    setBody(newData);
    const data = makeResponse(0, 0);
    console.log(data);
    setResponseBody(data);
  };
  const collapseAll = () => {
    const newData = body.map((item) => {
      item.isExpand = false;
      item.isMarked = false;
      return item;
    });
    setBody(newData);
    const data = makeResponse(0, 0);
    console.log(data);
    setResponseBody(data);
  };

  const makeResponse = (start, depth) => {
    let childflag = 0;
    return (
      body &&
      body.map((item, index) => {
        if (index < start) return <></>;
        if (childflag === 1) return <></>;

        if (item.isMarked) return <></>;
        let left = 16 * depth;
        item.isMarked = true;
        if (item.name.includes('{') || item.name.includes('[')) {
          return (
            <Li key={index + start + 'li' + item.name}>
              <div
                key={index + 'div' + item.name}
                style={{
                  display: 'flex',
                  position: 'relative',
                  paddingLeft: left + 'px',
                }}
              >
                {index !== 0 && (
                  <Collapse
                    isExpand={item.isExpand}
                    onClick={(e) => handleClick(index)}
                  />
                )}
                <ResponsiveSpan>{item.name}</ResponsiveSpan>
              </div>

              <ul
                className={item.isExpand ? '' : 'hide'}
                key={index + 'ul' + item.name}
              >
                {makeResponse(index + 1, depth + 1)}
              </ul>
            </Li>
          );
        }
        if (item.name.includes('}') || item.name.includes(']')) {
          childflag = 1;
          left = 16 * (depth - 1);
          return (
            <Li
              key={index + start + 'res' + item.name}
              style={{ paddingLeft: left + 'px' }}
            >
              <ResponsiveSpan>{item.name}</ResponsiveSpan>
            </Li>
          );
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
  };
  useEffect(() => {
    let string = '';
    if (bodytype === '200') {
      string =
        response &&
        response

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
          .join('], ')
          .split(', ');
    }

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
  }, [response, bodytype]);
  // useEffect(() => {
  //   const string =
  //     response &&
  //     response
  //       .split('{')
  //       .join('{<div class="response">')
  //       .split('}')
  //       .join('</div>}')
  //       .split('<div class="response">')
  //       .join('<div class="response">')
  //       .split('</div>')
  //       .join('</div>')
  //       .split(',')
  //       .join(',<br/>');
  //   setRequestBody(string);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const changeContentResponse = (type) => {
    setBodyType(type);
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
            <CopyToClipboard text={body}>
              <CopyButton>Copy</CopyButton>
            </CopyToClipboard>
            <CopyButton onClick={expandAll}>Expand All</CopyButton>
            <CopyButton onClick={collapseAll}>Collapse All</CopyButton>
          </CopyBoard>
          <div>{responseBody ? responseBody : makeResponse(0, 0)}</div>

          {/* <P dangerouslySetInnerHTML={{ __html: body }}></P> */}
        </APIResponseBody>
      )}
    </APIResponseWrapper>
  );
};
export default APIResponse;
