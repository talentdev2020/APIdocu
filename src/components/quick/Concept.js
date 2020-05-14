import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  height: 56px;
  width: 56px;
  display: inline-block;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 15px;
`;
const Concept = () => {
  return (
    <>
      <Header>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="1.0.-Drafts"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="D.4.1.Developers---guides"
              transform="translate(-216.000000, -679.000000)"
            >
              <g id="01" transform="translate(160.000000, 623.000000)">
                <g id="Starred">
                  <g id="24px" transform="translate(52.000000, 52.000000)">
                    <polygon id="Path" points="0 0 48 0 48 48 0 48"></polygon>
                    <path
                      d="M24,21.8 C22.78,21.8 21.8,22.78 21.8,24 C21.8,25.22 22.78,26.2 24,26.2 C25.22,26.2 26.2,25.22 26.2,24 C26.2,22.78 25.22,21.8 24,21.8 Z M24,4 C12.96,4 4,12.96 4,24 C4,35.04 12.96,44 24,44 C35.04,44 44,35.04 44,24 C44,12.96 35.04,4 24,4 Z M28.38,28.38 L12,36 L19.62,19.62 L36,12 L28.38,28.38 Z"
                      id="Shape"
                      fill="#FFFFFF"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Header>
    </>
  );
};
export default Concept;
