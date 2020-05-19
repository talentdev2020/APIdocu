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
const PCI = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', color: '#2d292a' }}>
        <Header>
          <svg
            width="38px"
            height="46px"
            viewBox="0 0 38 46"
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
                transform="translate(-597.000000, -1035.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <g id="01" transform="translate(160.000000, 623.000000)">
                  <g id="Starred">
                    <g
                      id="24px-(4)"
                      transform="translate(437.000000, 412.000000)"
                    >
                      <path
                        d="M17.0921739,0.751304348 L2.48347826,7.24173913 C0.980869565,7.90956522 0,9.41217391 0,11.0608696 L0,20.8695652 C0,32.4521739 8.01391304,43.2834783 18.7826087,45.9130435 C29.5513043,43.2834783 37.5652174,32.4521739 37.5652174,20.8695652 L37.5652174,11.0608696 C37.5652174,9.41217391 36.5843478,7.90956522 35.0817391,7.24173913 L20.4730435,0.751304348 C19.4086957,0.271304348 18.1565217,0.271304348 17.0921739,0.751304348 Z M18.7826087,22.9356522 L33.3913043,22.9356522 C32.2852174,31.533913 26.546087,39.1930435 18.7826087,41.5930435 L18.7826087,22.9565217 L4.17391304,22.9565217 L4.17391304,11.0608696 L18.7826087,4.57043478 L18.7826087,22.9356522 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Header>
        <HTitle> PCI</HTitle>
      </div>
      <br />

      <p>
        The Payment Card Industry Data Security Standard (PCI DSS) is an
        information security standard for organizations that handle branded
        credit cards from the major card schemes.
      </p>
      <p>
        Organisations willing to store, transmit, or process sensitive card data
        such as the card holder’s primary account number (PAN), personal
        identification number (PIN), and card expiration date must comply with
        PCI DSS data security requirements. The process of becoming PCI DSS
        certified to store, transmit, and process such data directly is both
        time consuming and expensive. The Venus PCI SDK handles the complexities
        of protecting sensitive card data and show it to the cardholder, and can
        help you comply with some aspects of the PCI compliance burden.
      </p>
      <p>
        Venus is PCI-DSS-Level 1 compliant, and securely handles the card data.
      </p>
      <Title>PCI data on the Core API</Title>
      <p>
        If your platform is PCI-DSS-Level 1 compliant, our Core API can expose
        the card data so you can make use of it on your platform. That
        information will be returned in the card object in our API. These fields
        will not be present in that payload if your platform is not PCI
        compliant. Please contact us in case you want to activate that
        information in our Core API and we’ll guide you through the process.
      </p>
      <p>
        This is an example of a card object containing the PCI protected data:
      </p>
      <Card
        isJson
        title="Response
        "
        body={`{
            "cardholder": {\\
                "id": "crdhldr_1cd68f70917cb5ed",\\
                "email": "pat@wilson.com",\\
                "kyc_passed_at": "2016-10-19T23:20:21.034+00:00",\\
                "kyc_status": "PASSED",\\
                "kyc_identity_reason": null,\\
                "kyc_address_reason": null,\\
                "kyc_file_reason": null,\\
                "first_name": "Josh",\\
                "last_name": "Wilson",\\
                "phone": 6157915911,\\
                "cards": [{\\
                    "card": {\\
                        "id": "crd_c7015aecb8a05618",\\
                        "program_id": "Venus_GPR",\\
                        "last_four": "5542",\\
                        "status": "CREATED",\\
                        "activated_at": null,\\
                        "created_at": "2016-10-19T23:20:19+00:00",\\
                        "cardholder_id": "crdhldr_1cd68f70917cb5ed",\\
                        "pan": "2222333344445555",\\
                        "cvv": "123",\\
                        "expiration": "12/24",\\
                    }\\
                }],\\
                "created_at": "2016-10-19T23:20:17+00:00"\\
            }\\
        }\\
              `}
      />
      <Title>Venus PCI SDK</Title>

      <p>
        If you want to present the PCI data in your Mobile or Web App, but your
        platform is not PCI certified, you can still show that information to
        your users by using the Venus PCI SDK.
      </p>
      <p>
        The Venus PCI SDK is a small package that’s available for iOS, Android
        and Web, and contains a single UI component that can securely obtain the
        card’s PCI protected data and show it on screen, on top of any UI of
        your application.
      </p>
      <p>The Venus PCI SDK executes two main functions:</p>
      <ul class="numbered-list unordered-list content-dark-100">
        <li>
          <span class="circle-dark"></span>Securely obtain the PCI card data
        </li>
        <li>
          <span class="circle-dark"></span>Show the card data on screen in an
          isolated manner.
        </li>
      </ul>

      <Title>Securely obtain PCI card data</Title>
      <p>
        Using the PCI SDK in your app means integrating the PCIView UI component
        in any part of your UI. That PCIView component exposes a method that
        reveals the card’s PCI data. To do that, it implements logic that
        verifies the cardholder before presenting any card information.
      </p>

      <p>
        Only after verifying the cardholder (by verifying his / her primary
        credential), the card details are sent to the PCI SDK using SSL
        encryption. This mechanism protects the data if the requester is not the
        cardholder.
      </p>

      <p>
        Using the PCI SDK is a convenient way to avoid access to the PCI data
        from unauthorised actors, like other users or even your applications.
        Only the cardholders will have access to their card data.
      </p>

      <Title>Show PCI data on screen</Title>
      <p>
        The Venus PCI SDK isolates the card data from your application by using
        an embedded IFrame that avoids access to the IFrame contents from the
        host application.
      </p>

      <p>
        The PCI SDK can show the card’s PAN, CVV and Exp.Date., and it can show
        them on top of your UI. Do you want to render a card and show the data
        on it? Supported. Do you want to show the card data in a form? Supported
        too. You just need to adjust the PCI SDK UI using the customization
        options that it offers.
      </p>
      <p>
        Each label can be positioned independently, and the whole PCIView can
        also be positioned in your application layout. Using CSS styles, you can
        customise the look and feel of these three labels to make them feel part
        of your application.
      </p>
      <Footer />
    </Wrapper>
  );
};
export default PCI;
