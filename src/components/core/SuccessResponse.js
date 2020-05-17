import React, { useState, useEffect, useCallback } from 'react';
import Divider from '@material-ui/core/Divider';

import styled, { css } from 'styled-components';
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
    props.status === 200 &&
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
const Param1 = styled.div`
  display: flex;
  padding: 1rem 0;
`;
const Param = styled.div`
  display: flex;

  padding-top: 7px;

  border-left: 1px solid #386117;
  &:last-child:first-child {
    background: none;
    border-left-color: transparent;
    border-left-width: 0px;
  }
  &:first-child {
    padding-top: 6px;

    background-image: linear-gradient(
      transparent 0%,
      transparent 22px,
      rgb(38, 35, 208) 22px,
      rgb(38, 35, 208) 100%
    );
    border-left-width: 0px;

    background-size: 1px 100%;
    background-position: left top;
    background-repeat: no-repeat;
  }
  &:last-child {
    padding-top: 6px;
    background-size: 1px 100%;
    border-left-width: 0px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      to bottom,
      #2623d0 0%,
      #2623d0 22px,
      transparent 22px,
      transparent 100%
    );
  }
`;
const TreeArrow = styled.span`
  color: #2623d0;
  cursor: pointer;
  font-family: Courier, monospace;
  margin-right: 10px;
  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    background: #2623d0;
    height: 1px;
  }
  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    background: #2623d0;
    height: 7px;
  }
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
// const Param = styled.div`
//   display: flex;
//   margin-top: 1rem;
//   margin-bottom: 1rem;
// `;
const SuccessResponse = ({ status, response }) => {
  const [success, setSuccess] = useState(false);
  const [responseBody, setResponseBody] = useState('');
  // const [body, setBody] = useState('')
  const showResponse = () => {
    setSuccess(!success);
  };
  // const handleClick = useCallback((index, source) => {
  //   const temp =
  //     source &&
  //     source.map((item, i) => {
  //       item.isMarked = false;
  //       if (index === i) item.isExpand = !item.isExpand;
  //       return item;
  //     });
  //   const data = makeResponse(temp, 0, 0);
  //   setResponseBody(data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const makeResponse = useCallback(
  //   (source, start, depth, isFirst = false) => {
  //     let childflag = 0;
  //     return (
  //       source &&
  //       source.map((item, index) => {
  //         if (index === 0) return <></>;
  //         if (index < start) return <></>;
  //         if (childflag === 1) return <></>;

  //         if (item.isMarked) return <></>;
  //         item.isMarked = true;
  //         const temp = item.name.split('"').join('');
  //         const name = temp.split(':')[0];
  //         const value = typeof temp.split(':')[1];
  //         if (item.name.includes('{') || item.name.includes('[')) {
  //           if (isFirst && depth >= 1) item.isExpand = false;
  //           return (
  //             <Param key={index + start + 'li' + item.name}>
  //               <ParamTitle
  //                 onClick={(e) => handleClick(index, source)}
  //                 key={index + 'key' + item.name}
  //               >
  //                 <TreeArrow />
  //                 {name}
  //               </ParamTitle>

  //               <Collapse isExpand={item.isExpand} />
  //               <ParamBody key={index + 'body' + item.name}>
  //                 <ParamDescriptionTitle>{value}</ParamDescriptionTitle>
  //               </ParamBody>
  //               <ul className={item.isExpand ? '' : 'hide'}>
  //                 {makeResponse(source, index + 1, depth + 1, isFirst)}
  //               </ul>
  //             </Param>
  //           );
  //         }
  //         if (item.name.includes('}') || item.name.includes(']')) {
  //           childflag = 1;
  //           item.isMarked = false;
  //           return <></>;
  //         }

  //         return (
  //           <Param>
  //             <ParamTitle
  //               onClick={(e) => handleClick(index, source)}
  //               key={index + 'key' + item.name}
  //             >
  //               <TreeArrow />
  //               {name}
  //             </ParamTitle>
  //             <ParamBody key={index + 'body' + item.name}>
  //               <ParamDescriptionTitle>{value}</ParamDescriptionTitle>
  //             </ParamBody>
  //           </Param>
  //         );
  //       })
  //     );
  //   },
  //   [handleClick],
  // );

  // useEffect(() => {
  //   let string = '';
  //   try {
  //     string = JSON.parse(response);
  //   } catch (e) {}
  //   console.log('{Parse', string);

  //   let depth = 0;
  //   let newData =
  //     string &&
  //     string.map((item) => {
  //       if (item.includes('[') || item.includes('{')) {
  //         item = { name: item, isExpand: depth > 4 ? false : true };
  //         depth++;
  //       } else if (item.includes(']') || item.includes('}')) {
  //         item = { name: item, isExpand: false };
  //         depth--;
  //       } else item = { name: item };
  //       return item;
  //     });
  //   console.log('newdata', newData);
  //   // setBody(newData);
  //   const data = makeResponse(newData, 0, 0, true);
  //   setResponseBody(data);
  //   console.log('data', data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [response]);

  useEffect(() => {
    if (!response) return;

    try {
      console.log('response', response);
      const t_response = JSON.parse(response);

      const objects = Object.keys(t_response);
      console.log('objects', objects);
      let temp = [];
      objects.map((item) => {
        const type = typeof t_response[item];
        temp.push({ name: item, type: type });
        return item;
      });
      console.log('body', temp);
      setResponseBody(temp);
    } catch (e) {
      console.log('error', e);
    }
  }, [response]);
  return (
    <div>
      <ResponseBody
        status={status}
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
        {status}
      </ResponseBody>
      {status === 200 && success && (
        <div style={{ paddingLeft: '10px' }}>
          <span style={{ color: 'grey', marginRight: '20px' }}>
            RESPONSE SCHEMA:
          </span>
          <span style={{ color: 'black' }}>application/json</span>
          <Divider />
          <div>
            {responseBody &&
              responseBody.map((item) => {
                return (
                  <Param key={item.name}>
                    <ParamTitle>
                      <TreeArrow />
                      {item.name}
                    </ParamTitle>
                    <ParamBody>
                      <ParamDescriptionTitle>{item.type}</ParamDescriptionTitle>
                      <ParamDescription></ParamDescription>
                    </ParamBody>
                  </Param>
                );
              })}{' '}
            }
          </div>
        </div>
      )}
      {status === 400 && success && (
        <div style={{ paddingLeft: '10px' }}>
          <span style={{ color: 'grey', marginRight: '20px' }}>
            RESPONSE SCHEMA:
          </span>
          <span style={{ color: 'black' }}>application/json</span>
          <Divider />
          <Param1>
            <ParamTitle>error</ParamTitle>

            <ParamDescriptionTitle>object</ParamDescriptionTitle>
          </Param1>
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
  TreeArrow,
};
