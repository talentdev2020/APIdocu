import React from 'react';

import styled from 'styled-components';

const Title = styled.div`
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 0.7rem;
`;
const Body = styled.div`
  padding-left: 1rem;
`;
const VerificationSection = () => {
  return (
    <>
      <Title>"**How is risk analysis done**</Title>
      <div>
        Based on the entity information provided, the documents submitted, and
        other vendors we are integrated with. The system then groups the minimum
        required information to initiate the analysis which follows the
        following flow:
      </div>
      <Body>
        - Tier 1
        <Body>
          - When the user has fully completed all needed fields for their
          profile which are full name, complete address, birth date, and nin.
        </Body>
      </Body>

      <Body>
        - Tier 2
        <Body>
          - When the user has fully uploaded the required documentation which
          includes a picture of their ID both front and back, proof of address,
          and a selfie.
        </Body>
        <Body>
          - Profile information and documents are forwarded to a group of APIs
          from partners we are integrated with, which conducts full checks, both
          locally and internationally. That data is received and through our
          proprietary risk scoring system, we generate a score that is then
          compiled in a verification record. The verification record will
          contain the final score, the data source from our API partners, the
          results with all the OFAC, AML, etc. hits, and the match/mismatch of
          the user information (including the address) verified against trusted
          databases.{' '}
        </Body>
      </Body>
      <Title>**Possible outcomes from KYC runs**</Title>
      <Body>
        - The verification is approved:{' '}
        <Body>
          - If the final score is larger then the minimum required score set for
          the issuer (the score is set specifically for each issuer based on
          their user base), the verification record is set to `verified` status
          instantly and the user also becomes tier 2 completed.
        </Body>
      </Body>
      <Body>
        - The verification is declined:
        <Body>
          - If the final score is less than the minimum required score, the
          status of the verification will be `pending` with all the information
          needed for the issuer to manually review with the user.{' '}
        </Body>
      </Body>
      <p>
        Regardless of the verification record being `verified`, `failed`, or
        `pending` the issuer will always receive a webhook notification
        containing a full copy of the verification record from the KYC run.
      </p>
      <Title>**What should I do with the verification record**</Title>

      <Body>
        <p>
          The first thing to do when a webhook is received for a KYC
          verification is to check the status. If the status is `verified` or
          `failed`, no further action is needed as both are final. In case it is
          `verified` it means the entity is ready to issue cards, as for
          `failed` it means the entity did not meet the minimum requirements to
          have a card issued.
        </p>
        <p>
          If the status is `pending` then the issuer should go through the data
          provided by the verification record and manually resolve the
          mismatches with the user, once the issuer is ready to properly rerun
          the KYC, the issuer should simply update the entity with the correct
          information, that's it, the system will automatically rerun KYC and
          update the current `pending` verification record with the updated KYC
          run information, a webhook is fired whenever the verification records
          are updated. If on the follow-up runs it passes KYC, then the issuer
          will receive the same verification record with the new result, score,
          and with the status set to `verified`, at this point the user will be
          tier 2 completed.
        </p>
      </Body>
      <Title>**Tips and Hints**</Title>
      <Body>
        To improve the automation process, the issuer can implement logic in
        their ecosystems in a way that when it receives a webhook for a
        verification record that is `verified`, it automatically fires a push
        notification to a frontend app so that it directs the user to the card
        issuance phase. The issuer can even, on the background, issue the card
        for the user in a case where the user had a pending verification but got
        verified afterwards.
      </Body>
      <Title>**The National Identification Number**</Title>
      <Body>
        The National Identification Number, identified in our system as just
        NIN, is the identification number from a local government authority
        where the user currently resides. It is used to properly identify the
        user in private and public databases during the KYC verification process
        and to validate the user information.
      </Body>
    </>
  );
};
export default VerificationSection;
