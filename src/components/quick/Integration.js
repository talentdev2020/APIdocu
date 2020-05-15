import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Responsive from '../common/CResponsive';

const Wrapper = styled(Responsive)`
  text-align: left;
  padding: 2rem;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 1rem;
  color: #9d9d9d;
  letter-spacing: 0;
  line-height: 26px;
`;
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
const SubTitle = styled.h3`
  color: #413e3f;
  font-size: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: black;
`;
const Integration = () => {
  return (
    <Wrapper>
      <Header>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 40 40"
          version="1.1"
          xmlns="http://www.w.org/2000/svg"
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
      <h2 style={{ fontSize: '2rem', color: 'black' }}>Integration Scenario</h2>

      <p>
        The Apto platform offers different integration options to adapt to your
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
        application integrated with your backend. Using the Apto Core API,
        you’ll have all the control, and all the information will flow from the
        Apto platform to your backend and, finally, to the cardholder’s mobile
        application.
      </p>
      <p>
        Apto’s Core API is the one that offers more functionality and
        flexibility. Using it, you’ll be able to onboard cardholders and issue
        cards, and you’ll be able to integrate with other functionalities like
        crediting or debiting a card from your platform, support for
        remittances, or other interesting functions that are available in our
        Core API. Please check our APIs section to know more.
      </p>
      <Title>Mobile API</Title>
      <p>
        In case that you don’t want to implement a backend-to-backend
        integration, Apto also supports a direct integration from your mobile
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
        This is the recommended scenario if you want to integrate the Apto
        services in your mobile app without developing a backend-to-backend
        integration. This method restricts access to one single user data via
        strong authentication and session tokens. You can build your own UI in
        your app and use the Mobile API to interact with the Apto API.
      </p>
      <Title>Mobile SDKs</Title>
      <p>
        We also offer SDK’s that wrap the Mobile API so you don’t need to deal
        with the network requests. Convenient classes are exposed in these
        mobile SDK’s, available for iOS (Swift and Objective-C) and Android
        (kotlin and java). Please refer to the mobile
        <a href="https://www.aptopayments.com/#developers/apto_sdks">
          {' '}
          SDKs
        </a>{' '}
        section on this portal for further information.
      </p>
      <p>
        Apto UI SDKs are also available. These SDKs implement a standard
        cardholder experience, both the onboarding and card management flows, so
        you don’t even need to implement that UI in your application. With the
        Apto UI SDKs, two lines of code can present all the functionality that
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
