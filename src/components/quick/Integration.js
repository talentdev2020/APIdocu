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
  font-size: 20px;
  margin-top: 44px;
  color: #2d292a;
  font-weight: 600;
`;
const Integration = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', color: '#2d292a' }}>
        <Header>
          <svg
            width="36px"
            height="40px"
            viewBox="0 0 36 40"
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
                transform="translate(-218.000000, -1039.000000)"
              >
                <g id="01" transform="translate(160.000000, 623.000000)">
                  <g id="Starred">
                    <g
                      id="24px-(8)"
                      transform="translate(52.000000, 412.000000)"
                    >
                      <polygon id="Path" points="0 0 48 0 48 48 0 48"></polygon>
                      <path
                        d="M36,32.16 C34.48,32.16 33.12,32.76 32.08,33.7 L17.82,25.4 C17.92,24.94 18,24.48 18,24 C18,23.52 17.92,23.06 17.82,22.6 L31.92,14.38 C33,15.38 34.42,16 36,16 C39.32,16 42,13.32 42,10 C42,6.68 39.32,4 36,4 C32.68,4 30,6.68 30,10 C30,10.48 30.08,10.94 30.18,11.4 L16.08,19.62 C15,18.62 13.58,18 12,18 C8.68,18 6,20.68 6,24 C6,27.32 8.68,30 12,30 C13.58,30 15,29.38 16.08,28.38 L30.32,36.7 C30.22,37.12 30.16,37.56 30.16,38 C30.16,41.22 32.78,43.84 36,43.84 C39.22,43.84 41.84,41.22 41.84,38 C41.84,34.78 39.22,32.16 36,32.16 Z"
                        id="Path"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Header>
        <HTitle style={{ fontSize: '2rem', color: 'black' }}>
          Integration Scenario
        </HTitle>
      </div>
      <br />
      <p>
        The Venus platform offers different integration options to adapt to your
        specific needs. We’ll help you decide what’s the best option for you,
        based on your requirements and the characteristics of your platform.
      </p>
      <Title>Core API</Title>
      <p>
        The preferred integration scenario involves using our Core API. This API
        is designed to be used in a backend-to-backend communication and uses
        private api keys to secure the communication. These keys can’t be shared
        or exposed in final user applications.
      </p>
      <p>
        This is the recommended scenario if you already have a mobile
        application integrated with your backend. Using the Venus Core API,
        you’ll have all the control, and all the information will flow from the
        Venus platform to your backend and, finally, to the cardholder’s mobile
        application.
      </p>
      <p>
        Venus’s Core API is the one that offers more functionality and
        flexibility. Using it, you’ll be able to onboard cardholders and issue
        cards, and you’ll be able to integrate with other functionalities like
        crediting or debiting a card from your platform, support for
        remittances, or other interesting functions that are available in our
        Core API. Please check our APIs section to know more.
      </p>
      <Title>Mobile API</Title>
      <p>
        In case that you don’t want to implement a backend-to-backend
        integration, Venus also supports a direct integration from your mobile
        apps using our mobile-centric Mobile API. This API is designed to be
        used by final users from their mobile apps, and restricts access to the
        data of a single cardholder, after authenticating him / her using 2FA.
      </p>
      <p>
        Everything that a user could need in the mobile app, including
        cardholder on-boarding, card issuance, card management and transaction
        management is available in this API.
      </p>
      <p>
        This is the recommended scenario if you want to integrate the Venus
        services in your mobile app without developing a backend-to-backend
        integration. This method restricts access to one single user data via
        strong authentication and session tokens. You can build your own UI in
        your app and use the Mobile API to interact with the Venus API.
      </p>
      <Title>Mobile SDKs</Title>
      <p>
        We also offer SDK’s that wrap the Mobile API so you don’t need to deal
        with the network requests. Convenient classes are exposed in these
        mobile SDK’s, available for iOS (Swift and Objective-C) and Android
        (kotlin and java). Please refer to the mobile
        <a href="https://www.Venuspayments.com/#developers/Venus_sdks">
          {' '}
          SDKs
        </a>{' '}
        section on this portal for further information.
      </p>
      <p>
        Venus UI SDKs are also available. These SDKs implement a standard
        cardholder experience, both the onboarding and card management flows, so
        you don’t even need to implement that UI in your application. With the
        Venus UI SDKs, two lines of code can present all the functionality that
        your users will need. The look and feel of these UI elements can be
        customised to make them similar to your application.
      </p>
      <Title>PCI SDK</Title>
      <p>
        "If you want to present PCI protected data in your mobile apps, but your
        platform is not PCI compliant, the PCI SDK can help you. Embedding it in
        your mobile apps, you can present PCI information to your users in your
        mobile apps that will be securely handled. Please refer to our PCI
        section to learn more. PCI section to know more.
      </p>
      <Footer />
    </Wrapper>
  );
};
export default Integration;
