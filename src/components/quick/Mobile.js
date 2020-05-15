import React from 'react';
import styled from 'styled-components';

import { Wrapper, HTitle } from './Concept';

const Mobile = () => {
  return (
    <Wrapper>
      <HTitle>Apto Mobile API (1.0)</HTitle>
      <p>
        <span>
          E-mail:
          <a style={{ color: '#9d9d9d' }} href="mailto:hello@aptopayments.com">
            hello@btasg.com
          </a>
        </span>
      </p>
      <p>Welcome to the Apto B2C API reference.</p>
      <p>
        Apto provides an easy way to access different financial services in a
        unified and easy to use API. The Apto Platform is designed around a set
        of core services focused in team management, project / product handling,
        user account management, user data verification and cards management. On
        top of these features, different financial services are offered. The
        list of financial services offered by the Apto Platform will be improved
        adding more services in the future.
      </p>
      <p>
        The Apto platform offers a set of APIs that are designed to cover
        different integration scenarios:
      </p>
      <ul>
        <li>
          B2C API. This API is designed to be used from a final user application
          interacting with the Apto platform. Examples of this are native
          applications (iOS, Android) or websites. This document describes the
          Apto B2C API.
        </li>
        <li>
          B2B API. This API is designed to be used in a backend to backend
          integration with the Apto platform. You can find more information
          about the Apto B2B API here
        </li>
      </ul>
      <p>
        We’ve tried to make this documentation as straightforward as possible
        and provide clear example code, but please drop us a line with any
        questions you may have.
      </p>
      <p>
        The Apto B2C API is architected around REST, and uses HTTP verbs and
        unique URI's to access the different resources. It uses HTTP response
        codes to indicate status and errors. All responses come in standard
        JSON. The Apto B2C API is served over HTTPS to ensure data privacy; HTTP
        is not supported
      </p>
      <br />
      <HTitle>Verifications</HTitle>
      <p>How user is verified to access the API resources</p>
    </Wrapper>
  );
};
export default Mobile;
