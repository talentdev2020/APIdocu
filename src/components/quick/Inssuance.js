import React from 'react';
import styled from 'styled-components';
import './Inssuance.css';
import Card from './Card';
import Footer from './Footer';
import Responsive from '../common/CResponsive';

const Wrapper = styled(Responsive)`
  text-align: left;
  padding: 2rem;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 1rem;
  color: #807f7f;
  letter-spacing: 0;
  line-height: 26px;
`;
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
  font-size: 1.5rem;
  color: black;
  margin-top: 3.5rem;
`;
const HTitle = styled.div`
  color: '#2d292a';
  font-weight: 400;
  font-size: 2rem;
  margin: auto 0;
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
      <Card
        title="Card issuance
        "
        body={`curl https://api.aptopayments.com/cardholders \\
        -u pk_test_72_bf76fa137a7a4f64e6de197e306b96: \\
        -X POST \\
        -d "first_name=John" \\
        -d "last_name=Doe" \\
        -d "email=john.doe@example.com" \\
        -d "phone_number=+12025550160" \\
        -d "date_of_birth=1992-06-20" \\
        -d "address[street_one]=555 50th St." \\
        -d "address[locality]=San Francico" \\
        -d "address[region]=CA" \\
        -d "address[postal_code]=95159" \\
        -d "address[country]=USA" \\
        -d "document[type]=SSN" \\
        -d "document[value]=123450000" 
              `}
      />
      <p>
        This request creates a cardholder, conducts KYC (Know Your Customer) on
        the data provided, and issues a card for that cardholder:
      </p>
      <Card
        isJson
        title="Response
        "
        body={`{
            "cardholder": {\\
                "id": "crdhldr_1cd68f70917cb5ed",\\
                "email": "john.doe@example.com",\\
                "kyc_passed_at": "2016-10-19T23:20:21.034+00:00",\\
                "kyc_status": "PASSED",\\
                "kyc_identity_reason": null,\\
                "kyc_address_reason": null,\\
                "kyc_file_reason": null,\\
                "first_name": "Josh",\\
                "last_name": "Doe",\\
                "phone": "+12025550160",\\
                "cards": [{\\
                    "card": {\\
                        "id": "crd_c7015aecb8a05618",\\
                        "program_id": "Apto_GPR",\\
                        "last_four": "5542",\\
                        "status": "CREATED",\\
                        "activated_at": null,\\
                        "created_at": "2016-10-19T23:20:19+00:00",\\
                        "cardholder_id": "crdhldr_1cd68f70917cb5ed"
                    }\\
                }],\\
                "created_at": "2016-10-19T23:20:17+00:00"\\
            }
        }
              `}
      />
      <Title>Cardholder state</Title>

      <p>
        Issued cards have their own state and type. Depending on the
        configuration of the card program, a recently issued card can be
        virtual, physical or hybrid:
      </p>
      <ul class="numbered-list content-dark-100">
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
        <li>
          <span class="circle-dark"></span>Hybrid cards can be used immediately
          in e-commerce transactions, and after card activation (see our{' '}
          <a href="#/developers#developers-api-references">API reference</a>),
          they can be also used in card-present transactions
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
              <code class="code-sample">created</code>
            </td>
            <td>
              Cards that have not been activated yet. This state applies to
              physical cards and hybrid card only.
            </td>
          </tr>
          <tr>
            <td>
              <code class="code-sample">activated</code>
            </td>
            <td>
              Cards that are activated can be used to conduct e-commerce and
              card-present transactions
            </td>
          </tr>
          <tr>
            <td>
              <code class="code-sample">deactivated</code>
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
              <code class="code-sample">closed</code>
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
      <Title>Card issuance (Mobile API)</Title>
      <p>Issuing a card through the Apto Mobile API is a three-step process:</p>
      <ul class="  unordered-list content-dark-100">
        <li>
          <div class="ordered-item">
            <span class="ordered-item-circle">
              <span class="h5-light-100 ordered-item-number">1</span>
            </span>
          </div>
          Verify cardholder primary credential
        </li>
        <li>
          <div class="ordered-item">
            <span class="ordered-item-circle">
              <span class="h5-light-100 ordered-item-number">2</span>
            </span>
          </div>
          Creating a cardholder
        </li>
        <li>
          <div class="ordered-item">
            <span class="ordered-item-circle">
              <span class="h5-light-100 ordered-item-number">3</span>
            </span>
          </div>
          Issuing a card for the cardholder
        </li>
      </ul>
      <p>
        To create a cardholder, the Mobile API requires that the user verifies
        the primary credential, that credential being configurable in a per
        project / custodian basis. Users can verify their phone number, email,
        or other credentials (depending on the configuration of the project /
        custodian).
      </p>
      <Title>Step 1: Verify a cardholder primary credential</Title>
      <p>
        To verify the cardholder primary credential, the first step is to start
        the verification:
      </p>
      <Card
        title="Start Verification

        "
        body={`curl https://api.ux.aptopayments.com/v1/verifications/start \\
        -X POST \\
        -H "Api-Key: Bearer {Public API Key}" \\
        -d '{ \\
              "datapoint_type": "phone", \\
              "datapoint": { \\
                "country_code": 1, \\
                "phone_number": 9366661232 \\
              }, \\
            }'
              `}
      />
      <p>
        This request will initiate the verification of the user’s phone number
        and will send a one-time password (OTP) via SMS (note: the OTP
        expiration time is 15 minutes, after that time, a new one will be
        required). The response will include a verification object identified by
        the verification_id field, in pending state:
      </p>
      <Card
        title="Response  "
        isJson
        body={`{
            "type": "verification",
            "verification_id": "b35edd5c-12b3-9099-1596-1ea35331d18a",
            "status": "pending"
          }
              `}
      />
      <p>
        The user will have to introduce that OTP in the app, so the verification
        can be completed through the finish verification endpoint:
      </p>
      <Card
        title="ReFinish Verification
        sponse  "
        body={`curl https://api.ux.aptopayments.com/v1/verifications/{verification_id}/finish \\
        -X POST \\
        -H "Api-Key: Bearer {Public API Key}" \\
        -d "secret=1234"
              `}
      />
      <p>
        The result of the previous request will include information regarding
        the status of the verification (passed, not passed):
      </p>
      <Card
        title="Response
       "
        isJson
        body={`{
            "type": "verification",
            "verification_id": "b35edd5c-12b3-9099-1596-1ea35331d18a",
            "status": "passed"
          }
              `}
      />
      <p>
        A passed verification for a primary credential can be used to create a
        cardholder in step 2.
      </p>
      <Title>Step 2: Create a cardholder</Title>
      <p>
        To create a cardholder from its primary credential verification, use the
        following endpoint:
      </p>
      <Card
        title="Cardholder creation

       "
        isJson
        body={`curl https://api.ux.aptopayments.com/v1/user \\\
        -X POST \\\
        -H "Api-Key: Bearer {Public API Key}" \\\
        -d '{ "data_points": { "type": "list", "data": [ \\
              {"data_type": "phone", "country_code": "1", "phone_number": "3202476962", \\
               "verification": {"type": "verification", "verification_id": "b35edd5c-12b3-9099-1596-1ea35331d18a", "secret": "123456"}\\
              }, \\
              {"data_type": "name", "first_name": "Sandor", "last_name": "Clegane"}, \\
              {"data_type": "id_document", "doc_type": "ssn", "value": "111110000", "country": "US"}, \\
              {"data_type": "address", "locality": "San Francisco", "street_one": "1310 Fillmore St.", "postal_code": "94115", "street_two": "", "region": "CA", "country": "US"}, \\
              {"data_type": "birthdate", "date": "1900-01-01"}, \\
              {"data_type": "email", "email": "test1@email.com"}\\
          ]}}'
              `}
      />
      <p>
        The previous request checks the validity of the primary credential
        verification, and creates the cardholder. The response contains the{' '}
        <code class="code-sample">user_id</code> and{' '}
        <code class="code-sample">user_token</code> for that cardholder:
        <Card
          title="Response
       "
          isJson
          body={`{\\
            "type": "user_id", \\
            "user_id": user-uuid, \\
            "user_token":  user-token\\
        }
              `}
        />
      </p>
      <Title>Step 3: Issue a card</Title>
      <p>
        Using the mobile API, users can issue cards by identifying themselves
        with their user tokens. To issue a card in the Mobile API, use the
        following request:
      </p>
      <Card
        title="Issue card

       "
        body={`curl https://api.ux.aptopayments.com/v1/user/accounts/issuecard \\
        -X POST \\
        -H "Api-Key: Bearer {Public API Key}" \\
        -H "Authorization: Bearer {User Token}"
              `}
      />
      <p>
        The previous request issues a card for the current cardholder. The
        response includes the basic, non PCI protected data of the card, and the
        card state (see card state in the Core API chapter in this guide)
      </p>
      <Card
        title="Response
       "
        body={`{\\
            "type":"card",\\
            "account_id":"ef156206-b9cc-ea20-4dba-769594015bb9",\\
            "last_four":"6607",\\
            "card_network":"VISA",\\
            "card_brand":null,\\
            "state":"created"\\
        }
              `}
      />
      <Footer />
    </Wrapper>
  );
};
export default Inssuance;
