import React from 'react';
import styled from 'styled-components';
import './Inssuance.css';
import Card from './Card';
import Footer from './Footer';
import { Wrapper, HTitle } from './Concept';
const Header = styled.div`
  height: 56px;
  width: 56px;
  display: inline-block;
  border-radius: 8px;
  display: inline-flex;
  background-color: rgb(79, 86, 107);

  letter-spacing: 0;
  line-height: 39px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 15px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-top: 44px;
  color: #2d292a;
  font-weight: 600;
`;
const SubTitle = styled.h3`
  font-size: 17px;
  margin-top: 44px;
  color: #2d292a;
  font-weight: 600;
`;
const Inssuance = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', color: '#2d292a' }}>
        <Header>
          <svg
            width="40px"
            height="32px"
            viewBox="0 0 40 32"
            version="1.1"
            xmlns="http:\\www.w3.org/2000/svg"
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
                transform="translate(-596.000000, -683.000000)"
              >
                <g id="01" transform="translate(160.000000, 623.000000)">
                  <g id="Starred">
                    <g
                      id="24px-(1)"
                      transform="translate(432.000000, 52.000000)"
                    >
                      <polygon id="Path" points="0 0 48 0 48 48 0 48"></polygon>
                      <path
                        d="M40,8 L8,8 C5.78,8 4.02,9.78 4.02,12 L4,36 C4,38.22 5.78,40 8,40 L40,40 C42.22,40 44,38.22 44,36 L44,12 C44,9.78 42.22,8 40,8 Z M38,36 L10,36 C8.9,36 8,35.1 8,34 L8,24 L40,24 L40,34 C40,35.1 39.1,36 38,36 Z M40,16 L8,16 L8,14 C8,12.9 8.9,12 10,12 L38,12 C39.1,12 40,12.9 40,14 L40,16 Z"
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
        <HTitle> Card Issuance</HTitle>
      </div>
      <Title>Card issuance (Core API)</Title>
      <p>Using the Core API, issuing a card is a single-step process:</p>
      <SubTitle>- Get the Card Order </SubTitle>
      <Card
        title="Get Card Order By ID
        "
        body={`curl --location --request POST '{{url}}/api/v2/cardOrders/264'   \\
        
              `}
      />
      <p>
        This request get the information of a specific card order
        <br />
        Each card order is issued against an entity that is tier 2 completed,
        which means that they have passed KYC clearance (check Risk section for
        details). During the card order process, it is important to understand
        the `type` of card order to create and the `card_id` to issue it
        against. A `card_id` is a unique static number assigned to your account
        and provided by your manager which represents the card program itself
        (such as limits, card material, etc.).
      </p>
      <Card
        isJson
        title="Response
        "
        body={` { \\
          "success": true, \\
          "data": {\\
                "id": 194,\\
                "entity_id": 74341,\\
                "card_id": 21,\\
                "card_upgrade_id": null,\\
                "reference": null,\\
                "type": "issue",\\
                "status": "verified",\\
                "created_at": "2019-04-23 00:42:08",\\
                "updated_at": "2019-04-23 00:42:09",\\
                "entity_card": {\\
                      "id": 263,\\
                      "card_order_id": 264,\\
                      "entity_id": 24957,\\
                  "card_id": 1,\\
                  "from_entity_card_id": null,\\
                  "reference": "ec8c0c64-a3c4-4524-9015-a610c96ec592",\\
                  "number": "**** **** **** 1399",\\
                  "cvv": "***",\\
                  "expiry_date": "0423",\\
                  "balance": "0.000000000",\\
                  "daily_purchase_total": "0.000000000",\\
                  "daily_atm_total": "0.000000000",\\
                  "monthly_purchase_total": "0.000000000",\\
                  "monthly_atm_total": "0.000000000",\\
                  "physical": true,\\
                  "virtual": false,\\
                  "gift": false,\\
                  "locked": false,\\
                  "activated": true,\\
                  "pin_set": true,\\
                  "status": "processed",\\
                  "freeze": 0,\\
                  "created_at": "2019-04-23 00:42:08",\\
                  "updated_at": "2020-04-23 00:00:52",\\
                  "deleted_at": null\\
              }\\
          }\\
      }\\
        `}
      />{' '}
      <br />
      <SubTitle>- Get Entity Card </SubTitle>
      <Card
        title="Get Entity Card By ID
        "
        body={`curl --location --request POST '{{url}}/api/v2/entityCards/4'   \\
        
              `}
      />
      <p>
        This request get the information of a specific entity card
        <br />
        It represents the actual card issued with the network and also contains
        important information for tracking limits, when that card is active,
        lock and unlock features, the status of the card (including shipping
        status), and other important characteristics
      </p>
      <Card
        isJson
        title="Response
        "
        body={`{ \\
          "success": true, \\
          "data": { \\
              "id": 4, \\
              "card_order_id": null, \\
              "entity_id": 2, \\
              "card_id": 1, \\
              "from_entity_card_id": null, \\
              "reference": "274198852", \\
              "number": "**** **** **** 9035", \\
              "cvv": "***", \\
              "expiry_date": "0918", \\
              "balance": "0.000000000", \\
              "daily_purchase_total": "0.000000000", \\
              "daily_atm_total": "0.000000000", \\
              "monthly_purchase_total": "0.000000000", \\
              "monthly_atm_total": "0.000000000", \\
              "physical": false, \\
              "virtual": true, \\
              "gift": false, \\
              "locked": false, \\
              "activated": false, \\
              "pin_set": false, \\
              "status": "shipped", \\
              "freeze": 0, \\
              "created_at": "2018-09-13 04:55:16", \\
              "updated_at": "2019-04-24 02:59:56", \\
              "deleted_at": null \\
          } \\
      }`}
      />
      <Title>Cardholder state</Title>
      <p>
        Issued cards have their own state and type. Depending on the
        configuration of the card program, a recently issued card can be
        virtual, physical or hybrid:
      </p>
      <ul class="unordered-list content-dark-100">
        <li>
          <span class="circle-dark"></span>Virtual cards can be used immediately
          in e-commerce transactions.
        </li>
        <li>
          <span class="circle-dark"></span>Physical cards are blocked from use
          until the card is activated through the proper API endpoint (see our{' '}
          <a href="#/developers#developers-api-references">API reference</a>).
          After activation, they can be used in card-present transactions.
        </li>
      </ul>
      <p>
        Cards also have a state that controls the card’s lifecycle. Cards can be
        in one of the following states:
      </p>
      <table class="common-table table">
        <thead>
          <tr>
            <th>State</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code class="code-sample">pending</code>
            </td>
            <td>
              Cards that have not been activated yet. This state applies to
              physical cards and hybrid card only.
            </td>
          </tr>
          <tr>
            <td>
              <code class="code-sample">completed</code>
            </td>
            <td>
              Cards that are activated can be used to conduct e-commerce and
              card-present transactions
            </td>
          </tr>
          <tr>
            <td>
              <code class="code-sample">declined</code>
            </td>
            <td>
              Users can freeze their cards temporarily. In this state, incoming
              transactions for this card will be rejected by our{' '}
              <a href="/developers/guides/transaction_authorization">
                Transaction authorization module
              </a>
              . Deactivated cards can be activated at any time by the user (see
              our{' '}
              <a href="#/developers#developers-api-references">API reference</a>{' '}
              for the details)
            </td>
          </tr>
          <tr>
            <td>
              <code class="code-sample">failed</code>
            </td>
            <td>
              Cards can be closed by our customer support team, due to a variety
              of reasons: cards lost or stolen, cards that are expired, etc.
              Incoming transactions for closed cards will be rejected by our{' '}
              <a href="/developers/guides/transaction_authorization">
                Transaction authorization module
              </a>
              . Closed cards can’t be reopened.
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </Wrapper>
  );
};
export default Inssuance;
