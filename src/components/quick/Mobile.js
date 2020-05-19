import React from 'react';
import Footer from './Footer';
import { Wrapper, HTitle } from './Concept';

const Mobile = () => {
  return (
    <Wrapper>
      <HTitle>Venus Mobile API (1.0)</HTitle>
      <br />
      <p>
        <span>
          E-mail:
          <a style={{ color: '#9d9d9d' }} href="mailto:hello@Venuspayments.com">
            hello@btasg.com
          </a>
        </span>
      </p>
      <p>Welcome to the Venus B2C API reference.</p>
      <p>
        Venus provides an easy way to access different financial services in a
        unified and easy to use API. The Venus Platform is designed around a set
        of core services focused in team management, project / product handling,
        user account management, user data verification and cards management. On
        top of these features, different financial services are offered. The
        list of financial services offered by the Venus Platform will be
        improved adding more services in the future.
      </p>
      <p>
        The Venus platform offers a set of APIs that are designed to cover
        different integration scenarios:
      </p>
      <ul>
        <li>
          B2C API. This API is designed to be used from a final user application
          interacting with the Venus platform. Examples of this are native
          applications (iOS, Android) or websites. This document describes the
          Venus B2C API.
        </li>
        <li>
          B2B API. This API is designed to be used in a backend to backend
          integration with the Venus platform. You can find more information
          about the Venus B2B API here
        </li>
      </ul>
      <p>
        We’ve tried to make this documentation as straightforward as possible
        and provide clear example code, but please drop us a line with any
        questions you may have.
      </p>
      <p>
        The Venus B2C API is architected around REST, and uses HTTP verbs and
        unique URI's to access the different resources. It uses HTTP response
        codes to indicate status and errors. All responses come in standard
        JSON. The Venus B2C API is served over HTTPS to ensure data privacy;
        HTTP is not supported
      </p>
      <br />
      <HTitle>Verifications</HTitle>
      <p>How user is verified to access the API resources</p>
      <Footer />
    </Wrapper>
  );
};
export default Mobile;
