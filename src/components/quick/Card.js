import React, { useState, useRef } from 'react';
import './Card.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Card = ({ title, body, isJson }) => {
  const [copied, setCopied] = useState('Copy');
  let padding = useRef(0);
  const addPadding = () => {
    padding.current += 20;
  };
  const subPadding = () => {
    padding.current -= 20;
  };

  return (
    <>
      <div className="snippet-header">
        <h3 className="h5-light-100">{title}</h3>
        <CopyToClipboard text={body} onCopy={() => setCopied('Copied')}>
          <button className="copy-box">
            <svg
              width="17px"
              height="20px"
              viewBox="0 0 17 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="1.0.-Drafts"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="D.4.2.Developers---components"
                  transform="translate(-994.000000, -622.000000)"
                >
                  <g id="Content" transform="translate(380.000000, 206.000000)">
                    <g id="code" transform="translate(2.000000, 408.000000)">
                      <g id="24px" transform="translate(611.000000, 8.000000)">
                        <polygon
                          id="Path"
                          points="0 0 20 0 20 20 0 20"
                        ></polygon>
                        <path
                          d="M13.3333333,0.833333333 L3.33333333,0.833333333 C2.41666667,0.833333333 1.66666667,1.58333333 1.66666667,2.5 L1.66666667,14.1666667 L3.33333333,14.1666667 L3.33333333,2.5 L13.3333333,2.5 L13.3333333,0.833333333 Z M12.5,4.16666667 L6.66666667,4.16666667 C5.75,4.16666667 5.00833333,4.91666667 5.00833333,5.83333333 L5,17.5 C5,18.4166667 5.74166667,19.1666667 6.65833333,19.1666667 L15.8333333,19.1666667 C16.75,19.1666667 17.5,18.4166667 17.5,17.5 L17.5,9.16666667 L12.5,4.16666667 Z M6.66666667,17.5 L6.66666667,5.83333333 L11.6666667,5.83333333 L11.6666667,10 L15.8333333,10 L15.8333333,17.5 L6.66666667,17.5 Z"
                          id="Shape"
                          fill="#FFFFFF"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span className="copy-text">{copied}</span>
          </button>
        </CopyToClipboard>
      </div>

      <div className="snippet-content">
        {body.split('\\').map((line, index) => (
          <div className="line" key={line}>
            <div className="line-number">{index}</div>
            {line.includes('{') && addPadding()}
            {line.includes('}') && subPadding()}
            <div
              className="line-command"
              style={{ paddingLeft: `${padding.current}px` }}
            >
              {line}
            </div>
            {!isJson && (
              <div
                style={{
                  marginLeft: '15px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                {index === body.split('\\').length - 1 ? '' : '\\'}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
