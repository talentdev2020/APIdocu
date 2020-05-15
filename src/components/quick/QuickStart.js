import React from 'react';
import Footer from './Footer';

import Card from './Card';
import styled from 'styled-components';
import Responsive from '../common/CResponsive';
const IconWrapper = styled.div`
  height: 56px;
  width: 56px;
  display: inline-flex;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(0, 140, 0);
  margin-right: 15px;
`;
const P = styled.p`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 14px;
  color: #2d292a;

  letter-spacing: 0;
  margin: 20px 0px;
  line-height: 26px;
  text-align: left;
  @media (max-width: 992px) and (min-width: 0) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const H3 = styled.h3`
  font-size: 20px;
  letter-spacing: 0.12px;
  color: #2d292a;
  line-height: 28px;
  font-weight: 600;
  text-align: left;
  margin-top: 40px;
`;
const QuickStart = () => {
  return (
    <Responsive>
      <div style={{ textAlign: 'left' }}>
        <IconWrapper>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 42 42"
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
                id="D.4.0.Developers---intro"
                transform="translate(-218.000000, -992.000000)"
              >
                <g id="01" transform="translate(160.000000, 726.000000)">
                  <g id="Starred" transform="translate(0.000000, 212.000000)">
                    <g
                      id="24px-(2)"
                      transform="translate(54.000000, 52.000000)"
                    >
                      <polygon id="Path" points="0 0 48 0 48 48 0 48"></polygon>
                      <path
                        d="M41,22 L38,22 L38,14 C38,11.8 36.2,10 34,10 L26,10 L26,7 C26,4.24 23.76,2 21,2 C18.24,2 16,4.24 16,7 L16,10 L8,10 C5.8,10 4.02,11.8 4.02,14 L4.02,21.6 L7,21.6 C9.98,21.6 12.4,24.02 12.4,27 C12.4,29.98 9.98,32.4 7,32.4 L4,32.4 L4,40 C4,42.2 5.8,44 8,44 L15.6,44 L15.6,41 C15.6,38.02 18.02,35.6 21,35.6 C23.98,35.6 26.4,38.02 26.4,41 L26.4,44 L34,44 C36.2,44 38,42.2 38,40 L38,32 L41,32 C43.76,32 46,29.76 46,27 C46,24.24 43.76,22 41,22 Z"
                        id="Path"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </IconWrapper>
        <h2 style={{ margin: '0', display: 'inline-block' }}>Quickstart</h2>
      </div>
      <P>
        Interested to know how easy it is to get the CardOrder List using the
        Bta1stg API? Check this out:
      </P>
      <Card
        title="Query Card Orders List"
        body={`curl --location --request GET 'https://bta1stg.cardapi.net/api/v2/cardOrders?and[status][][eq]=verified&limit=2' \\
               --header 'Authorization: {{authorization}}'
              `}
      />
      <P>
        As you can see, using the Bta1stg API to get the cardOrders List is
        really easy; it’s also really easy to do interesting things with the
        cardOrders List, like cardOrder links, or get a list of cardOrders.
      </P>
      <H3> Get Card Order By ID</H3>
      <P>
        Cardholders love to check their cardOrders. For sure you’ll want to show
        the detailed cardOrders to them; to obtain a detailed information of a
        given cardOrder. To do that. you can just use the following request:
      </P>
      <Card
        title="Query Card Order By ID"
        body={`curl --location --request GET 'https://bta1stg.cardapi.net/api/v2/cardOrders/264' \\
              --header 'Authorization: {{authorization}}'
              `}
      />

      <H3> Get Card Transaction List</H3>
      <P>
        Cardholders love to use their cards to buy all sort of goodies. For sure
        you’ll want to show the card transactions to them; to obtain a list of
        transactions, you can just use the following request:
      </P>
      <Card
        title="Query Card Transaction List"
        body={`curl --location --request GET 'https://bta1stg.cardapi.net/api/v2/cardTransactions?limit=10&order[id]=desc' \\
            --header 'Authorization: {{authorization}}'
              `}
      />
      <Footer />
    </Responsive>
  );
};

export default QuickStart;
