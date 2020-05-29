import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { Wrapper, HTitle } from './Concept';

const Header = styled.div`
  height: 56px;
  width: 56px;
  display: inline-block;
  border-radius: 8px;
  display: inline-flex;
  background-color: rgb(79, 86, 107);

  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 15px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 44px;
  color: black;
`;
const Transactions = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', color: '#2d292a' }}>
        <Header>
          <svg
            width="36px"
            height="26px"
            viewBox="0 0 36 26"
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
                id="D.4.1.Developers---guides"
                transform="translate(-975.000000, -686.000000)"
              >
                <g id="01" transform="translate(160.000000, 623.000000)">
                  <g id="Starred">
                    <g
                      id="24px-(2)"
                      transform="translate(809.000000, 52.000000)"
                    >
                      <polygon id="Path" points="0 0 48 0 48 48 0 48"></polygon>
                      <path
                        d="M12.28,23.72 L6.72,29.3 C6.34,29.7 6.34,30.32 6.72,30.72 L12.28,36.3 C12.9,36.94 13.98,36.48 13.98,35.6 L13.98,32 L26,32 C27.1,32 28,31.1 28,30 C28,28.9 27.1,28 26,28 L13.98,28 L13.98,24.42 C13.98,23.52 12.9,23.08 12.28,23.72 Z M41.3,17.3 L35.74,11.72 C35.12,11.08 34.04,11.54 34.04,12.42 L34.04,16 L22,16 C20.9,16 20,16.9 20,18 C20,19.1 20.9,20 22,20 L34.02,20 L34.02,23.58 C34.02,24.48 35.1,24.92 35.72,24.28 L41.28,18.7 C41.68,18.32 41.68,17.68 41.3,17.3 Z"
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
        </Header>
        <HTitle>Transaction authorization</HTitle>
      </div>
      <br />
      <p>
        When a cardholder uses his / her card to make a purchase, an
        authorization request is made. This request is routed from the network
        (VISA, MASTERCARD) to Venus. Venus executes a process to decide if the
        transaction can be approved or if it must be rejected.:
      </p>
      <Title>Authorization</Title>
      <img src="/auth.jpg" alt="auth" width="100%" />
      <p>
        An authorization request is a card transaction type that pre-authorizes
        and sets a hold on the amount. It's held pending until the merchant
        settles. The settlement can happen overnight or whenever the merchant
        sends in the batch of transactions to the bank. The settlement of this
        type of card transaction should be observed on notifications with card
        transactions of type capture and the amount maybe lower or more then
        total amount in case of tips or surcharge.
      </p>
      <Title>Refunds/Unauths</Title>
      <img src="/refund.jpg" alt="refund" width="100%" />
      <p>
        Refund requests come as type "refund" and can be amounts lower or equal
        to the original card transaction. The main difference of a refund from
        an unauth is the fact that it is not linked to a previous card
        transaction in the system. Although it really is due to a previous card
        authorization, it is only used to refund authorizations/sales card
        transaction types that were fully captured/settled.
      </p>
      <Footer />
    </Wrapper>
  );
};
export default Transactions;
