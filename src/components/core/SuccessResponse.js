import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import descriptions from '../../lib/config';
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
  padding-top: 7px;

  border-left: 1px solid #2623d0;
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
  width: 15rem;
  color: black !important;
`;
const ParamDescriptionTitle = styled.div`
  color: #7369ca !important;
  font-size: 14px !important;
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
const SuccessResponse = ({ status, response, apiname }) => {
  const [success, setSuccess] = useState(false);
  const [responseBody, setResponseBody] = useState('');
  let id = 0;
  // const [body, setBody] = useState('')
  const showResponse = () => {
    setSuccess(!success);
  };

  // const path = useRef([]);
  const handleClick = (e, type) => {
    try {
      let parent;
      if (type === 1) {
        parent = e.target.parentNode.parentNode.parentNode;
      } else if (type === 2)
        parent = e.target.parentNode.parentNode.parentNode.parentNode;
      if (parent.children[1].className === 'hide')
        parent.children[0].children[0].children[2].innerHTML = `<svg
        version="1.1"
        viewBox="0 0 24 24"
        x="0"
        class="norotate"
        height= '1.1em'
        width='1.1em'
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
      </svg>`;
      else
        parent.children[0].children[0].children[2].innerHTML = `<svg
        version="1.1"
        viewBox="0 0 24 24"
        x="0"
        class="rotate"
        height= '1.1em'
        width='1.1em'
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
      </svg>`;

      parent.children[1].className =
        parent.children[1].className === 'hide' ? '' : 'hide';
    } catch (e) {}
  };
  const getDescription = (path) => {
    if (!path) return '';
    const arr = path.split(',');
    const length = arr.length;

    try {
      switch (length) {
        case 0:
          return '';
        case 1:
          return descriptions[apiname][arr[0]];
        case 2:
          return descriptions[apiname][arr[0]][arr[1]];
        case 3:
          return descriptions[apiname][arr[0]][arr[1]][arr[2]];

        default:
          break;
      }
    } catch (e) {}
  };
  const makeResponse = (source, path) => {
    const objects = Object.keys(source);
    let temp;
    return objects.map((item, index) => {
      let type = typeof source[item];
      if (source[item] === 'null') type = null;
      id++;
      if (path === '') temp = item;
      else temp = path + ',' + item;
      return (
        <Param key={id + 'dkey'}>
          <div style={{ display: 'flex' }}>
            <ParamTitle
              id={id + '_response'}
              key={index + 'key' + item}
              style={type === 'object' ? { cursor: 'pointer' } : {}}
            >
              <TreeArrow
                id={id + '_tree'}
                onClick={(e) => type === 'object' && handleClick(e, 1)}
              />
              <span onClick={(e) => type === 'object' && handleClick(e, 1)}>
                {item}
              </span>
              {type === 'object' && (
                <span
                  id={id + '_svg'}
                  onClick={(e) => type === 'object' && handleClick(e, 2)}
                >
                  <svg
                    version="1.1"
                    viewBox="0 0 24 24"
                    x="0"
                    className="rotate"
                    height="1.1em"
                    width="1.1em"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
                  </svg>
                </span>
              )}
            </ParamTitle>
            <ParamBody>
              <ParamDescriptionTitle>
                {item.includes('_at') ? 'date' : type}
              </ParamDescriptionTitle>
              <ParamDescription>
                {type === 'object' ? 'object' : getDescription(temp)}{' '}
              </ParamDescription>
            </ParamBody>
          </div>
          <div className="hide">
            {type === 'object' && Array.isArray(source[item]) && (
              <Param style={{ paddingLeft: '2rem' }}>
                <div>Array</div>
                {makeResponse(source[item][0], temp)}
              </Param>
            )}
            {type === 'object' &&
              source[item] &&
              !Array.isArray(source[item]) && (
                <Param style={{ paddingLeft: '15px' }}>
                  {' '}
                  {makeResponse(source[item], temp)}
                </Param>
              )}
          </div>
        </Param>
      );
    });
  };

  useEffect(() => {
    if (!response) return;

    try {
      const t_response = JSON.parse(response);
      // id.current = 0;
      const data = makeResponse(t_response, '');
      setResponseBody(data);
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <div>{responseBody}</div>
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
