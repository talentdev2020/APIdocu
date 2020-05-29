import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/CResponsive';
import Footer from './Footer';
import './concept.css';

const Wrapper = styled(Responsive)`
  text-align: left;
  padding: 2rem;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 14px;
  color: #2d292a;

  letter-spacing: 0;
  line-height: 26px;
  @media (max-width: 1055px) and (min-width: 0) {
    font-size: 13px;
    line-height: 22px;
  }
`;
const Header = styled.div`
  height: 56px;
  width: 56px;
  background-color: rgb(79, 86, 107);
  display: inline-block;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-right: 15px;
`;

const HTitle = styled.div`
  color: #2d292a;
  font-weight: 400;
  font-size: 2rem;
  margin: auto 0;
  @media (max-width: 1055px) and (min-width: 0) {
    font-size: 20px;
    line-height: 22px;
  }
`;
const Title = styled.h3`
  font-size: 20px;
  margin-top: 44px;
  color: #2d292a;
  font-weight: 600;
`;
const Concept = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
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
        <HTitle> KeyConcepts</HTitle>
      </div>
      <br />
      <p>
        Welcome to the Venus’s Key concepts guide. We’ll show you the basics
        around the key concepts handled by the Venus platform, such as card
        programs and cards. Here you’ll find also information regarding how
        these concepts are made available through our APIs and SDKs, and how to
        use them to successfully offer your customers a seamless, easy and quick
        experience to issue cards in seconds.
      </p>
      <Title>Projects</Title>
      <div>
        <p>
          Everything in Venus starts with a project, also called a custodian. A
          project is the parent object that provides context and branding to
          your application, and that groups all the cardholders and cards that
          will be issued for you.
        </p>
        <p>
          Projects define also the security context; before using the Venus
          APIs, we’ll generate a project for you and a set of public / private
          keys that identify the project and protect the data on it.
        </p>
      </div>{' '}
      <Title>URIs and Verbs</Title>
      <div>
        <p>
          The Venus API has been designed for simplicity and flexibility. It
          follows a RESTful protocol, which is based in HTTP verbs (POST, PUT,
          GET) to execute functions on specific objects. Objects in the API are
          represented by the so called URIs. URIs identify a specific object in
          the API. Objects are structured in a hierarchy (i.e., a cardholder can
          have multiple cards), and the URI's format represents that hierarchy.
          For example, to get data of a specific Card, the URI would be:
        </p>
      </div>
      <Title>Security and authentication</Title>
      <div>
        <p>
          All of the Venus APIs use authentication mechanisms to protect the
          data from unauthorised access. As explained before, we’ll provide you
          a set of public and private keys that can be used to access our APIs.
          Our Core API provides access to all the users created in the context
          of your project. This API is protected through a JWT token. This token
          provide access to all your cardholders data and under no circumstances
          should be made public / available outside of your private
          infrastructure. Don’t use them from your final user’s applications,
          for example.
        </p>

        <p>
          Our Mobile API provides access to the information of a unique
          cardholder, and is designed to be used by final users. This API uses a
          public API key that identifies the project, and a user session token
          that’s generated only after the user is properly verified through a
          2FA process.
        </p>
      </div>
      <Title>Core API</Title>
      <p>
        The Core API is designed to be used from and only from your backend, not
        from the final user’s application. This API gives you access to all the
        cardholders who sign up for your card programs. When signing up to use
        the Venus platform, we’ll generate a client id and a client secret that
        only your backend should know, and that must be used in all the
        endpoints of our Core API. That API uses HTTP basic authentication,
        using the standard Authorization header field to send the client id and
        client secret.
      </p>
      <Title>Mobile API</Title>
      <div>
        <p>
          The Mobile API is designed to be used from the final user’s
          application. That means that it can’t, for any reason, use the private
          pair of client id and client secret used in the Core API. When signing
          up to use the Venus platform, we’ll generate a public API key that can
          be used from your final user’s application. The Mobile API uses a user
          session token that gives access only to the current user’s
          information, and nothing else. It expects two header fields: Api-Key
          containing the public API key of your project, and Authorization using
          HTTP Bearer standard containing your user’s session token.
        </p>
        <p>
          To obtain a user session token, user credentials must be verified. To
          do that, verification of user’s phone number, email, date of birth, or
          other information will be required. Please refer to the Mobile API
          details and, specifically, to the verifications and login
          functionalities on that API.
        </p>
      </div>
      <Title>Venus basic objects</Title>
      <div>
        <p>
          The Venus API includes 5 basic objects that you can use to build your
          card program experience:
        </p>
        <ul class="unordered-list content-dark-100">
          <li>
            <span class="circle-dark"></span>Project/Custodian
          </li>
          <li>
            <span class="circle-dark"></span>Card Program
          </li>
          <li>
            <span class="circle-dark"></span>Cardholder
          </li>
          <li>
            <span class="circle-dark"></span>Card
          </li>
          <li>
            <span class="circle-dark"></span>Transaction
          </li>
        </ul>
      </div>
      <Title>Project/Custodian</Title>
      <p>
        In the Venus platform, a project (also called custodian) is used to
        define a context (branding, users, card settings). Projects are defined
        and customised by Venus to meet your needs and to customise the card
        capabilities and behaviour. Projects are not exposed in the Venus APIs,
        but are a fundamental piece for the platform to work. Don’t worry: we’ll
        configure them, they will be transparent for you.
      </p>
      <Title>Card Program</Title>
      <p>
        Card programs are used to specify the card characteristics, behaviour,
        and capabilities. Cards are issued under a given card program, and they
        inherit the card program’s configuration. Card type (debit, prepaid),
        capabilities (set pin, get pin), card branding in the UI SDKs, allowed
        transaction types (for virtual and physical cards), channel (VISA,
        MASTERCARD) and much more can be configured at the card program level.
      </p>
      <p>
        Card programs are used to specify the card characteristics, behaviour,
        and capabilities. Cards are issued under a given card program, and they
        inherit the card program’s configuration. Card type (debit, prepaid),
        capabilities (set pin, get pin), card branding in the UI SDKs, allowed
        transaction types (for virtual and physical cards), channel (VISA,
        MASTERCARD) and much more can be configured at the card program level.
      </p>
      <Title>Cardholder</Title>
      <p>
        We’re sure you’ll offer amazing card programs to your customers, and
        we’re here to help. Regardless of how the card is offered to your users
        (Core API integration, Mobile API integration, or using our Mobile
        SDKs), your users will have to provide a few data points required for
        the card issuance. Depending on the configuration of your project and
        card program, the required information will differ; in the most typical
        configuration, card issuance will require your user’s first and last
        name, residential address, phone, email and date of birth. We’ll help
        you to define exactly the information that your users will have to
        provide so they can ask for a card and become, effectively, cardholders.
        As always, we try to reduce friction and to configure the minimum amount
        of information that the existing regulations require.
      </p>
      <Title>Card</Title>
      <p>
        The Venus platform’s main goal is to issue cards and authorise
        transactions. Cards are issued for your cardholders. When a card is lost
        or expired, we can reissue cards for them easily.
      </p>
      <p>
        Venus supports Visa and Mastercard cards, debit and prepaid cards, and
        our APIs are prepared to offer all the information you need for a given
        card. You can obtain all the cards for a given cardholder, and also card
        details like the last four digits of the card number (PAN).
      </p>
      <p>
        Cards are protected by strict regulations and controls, the most
        important being defined by the PCI group. These regulations protect the
        card information, including the card number (PAN), the expiration date
        and the CVV. Depending on your PCI compliance level, Venus can expose
        that information to you. Don’t worry--if your platform is not PCI
        compliant, you can still show that information to your cardholders by
        using our PCI SDK. This SDK is designed to be embedded in the user’s
        application, and it’s built to verify your cardholder before revealing
        the card’s PCI protected data. So you’re covered regardless of your PCI
        compliance level!
      </p>
      <p>
        Whenever a user reports that a card is lost or stolen, our Operations
        team will close that card and new transactions will be rejected. As
        mentioned, in these cases we can easily issue a replacement for your
        cardholder.
      </p>
      <p>
        We try to adapt to your specific needs, and that’s why we support, for
        example, cards that are only virtual, only physical, or both. We’ll help
        you decide what’s the best option for you and your business, and we’ll
        configure everything accordingly.
      </p>
      <p>
        Venus cards can be connected to multiple funding sources, and you can
        even offer your cardholders the ability to switch between them in real
        time. Cardholders could, for example, connect a crypto wallet to their
        cards, or a bank account, and that funding source will be used whenever
        the card is used to make a transaction. Please refer to our API specs to
        learn more about funding sources and how to connect them to your cards.
      </p>
      <p>
        The Venus cards can be used anywhere VISA or MASTERCARD cards are
        accepted (depending on the configuration of your card program). Online
        transactions or presence transactions are supported, contactless, chip &
        pin, signature… all that you might expect from a modern card is
        supported by our cards.
      </p>
      <Title>Transaction</Title>
      <p>
        Issuing cards is a very important functionality of the Venus platform,
        but it would be useless without transaction processing. When a
        cardholder use their card in a given merchant, the transaction needs to
        be authorised before the funds are actually approved for settlement. The
        authentication process involves several layers of scrutiny, including
        fraud detection, balance checking, card capabilities and user
        preferences. Your cardholders might be interested in deactivating
        international transactions, for example. We’ll handle the complexities
        of this process for you so it is pretty much transparent.
      </p>
      <p>
        As mentioned, we support prepaid cards, but also debit cards that can be
        connected to multiple funding sources. During the transaction
        authorization process, we’ll check if the funding source connected to
        the card has enough funds. We’ll also conduct some security checks, like
        fraud detection or card blacklisting.
      </p>
      <p>
        Our Core API provides access to all the transactions conducted by your
        cardholders, including information regarding the different amounts
        involved (local, international, etc), the transaction status (accepted,
        rejected, hold), the date / time, merchant description, MCC, etc. so you
        can offer that information to your cardholders. Monthly statements are
        also available through our Core API.
      </p>
      <p>
        Our Mobile API provides access to a given cardholder to all of his / her
        transactions, including also statistics and monthly statements.
      </p>
      <Footer />
    </Wrapper>
  );
};
export default Concept;
export { Wrapper, HTitle };
