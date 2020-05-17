import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  border-bottom: 1px solid #c4c4d6;
  color: #02152f;
  padding: 1rem 0.5rem;
`;
const Th = styled.th`
  font-weight: 500;
  padding: 1rem 0.5rem;
`;

const Cardtranscations = () => {
  return (
    <>
      <p>
        Card transactions represent all transactions an entity did on their
        card. It is very useful information that can be used to reconcile with
        your systems ledger and help you properly track the funding process with
        your system. Currently, there are five transaction types, all with its
        unique use case. Below are explanation of each card transaction type and
        what it means
      </p>
      <p>
        <strong> **AUTH type** </strong>
        <br />
        This transaction is a pre-authorization. When a merchant obtains
        approval for this type of transaction, funds are kept on hold by the
        bank until the merchant officially captures, because of interchange
        costs and risks some merchants rather wait till the end of the day (or
        more when being a hotel for example) to capture all the transaction at a
        later time. Until that happens funds are kept on hold by the bank,
        neither the issuer (you) pays or the merchant receives the funds until
        they officially capture it. This transaction is considered final when
        the total approved amount is fully captured by the merchant.
      </p>{' '}
      <p>
        <strong>**SALE type** </strong>
        <br />
        The sale transaction types are the most simple ones throughout all the
        other types, and the reason is due to the fact that the transactions
        come already captured (settled). This means that as soon as you approve
        it, funds are immediately settled and no more action is required. For
        this matter, you will always see sale type card transaction only be on
        pending status in case it's pending on a confirmation from the POS/ATM
        reporting the operation was properly finalized.
      </p>
      <p>
        <strong>**REFUND type** </strong>
        <br />
        Refunds are credits that merchants issue against the user's card. The
        main difference a refund has from an `unauth` is the fact that it is not
        linked to any previous pending pre-authorization.
      </p>
      <p>
        <strong> **CAPTURE type**</strong>
        <br />A capture type is a transaction that will indicate a previous
        pre-authorization was settled. The captured amount can be greater,
        lower, or equal to the initial pre-authorization amount. In the event of
        a tip or any extra charge, it is on the capture that this amount will be
        present.
      </p>
      <p>
        <strong>**UNATH type**</strong>
        <br />
        An unauth type is the opposite of a capture. It will indicate a previous
        pre-authorization was reversed either partially or fully. The reversed
        amount can only be equal to or lower than the initial pre-authorization
        amount.
        <br />
        It is important to point out that only the approved amount from `auth`
        types can change, for all other types they are final and can not be
        changed.
      </p>
      <p>
        <strong>**Card Transaction Object**</strong>
      </p>
      <table
        style={{
          overflowX: 'auto',
          width: '100%',
          display: 'block',
        }}
      >
        <thead>
          <tr>
            <Th>Field</Th>
            <Th>Type</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>id</Td>
            <Td>integer</Td>
            <Td>The id of the card transaction</Td>
          </tr>
          <tr>
            <Td>from_card_transaction_id</Td>
            <Td>integer</Td>
            <Td>The parent card transaction</Td>
          </tr>
          <tr>
            <Td>entity_card_id</Td>
            <Td>string</Td>
            <Td>The entity card that this card transaction was for</Td>
          </tr>
          <tr>
            <Td>merchant</Td>
            <Td>string</Td>
            <Td>The merchant where the card transaction happened</Td>
          </tr>
          <tr>
            <Td>reference</Td>
            <Td>string</Td>
            <Td>The reference from the processor</Td>
          </tr>
          <tr>
            <Td>authorization</Td>
            <Td>string</Td>
            <Td>The authorization code from the network</Td>
          </tr>

          <tr>
            <Td>type</Td>
            <Td>enum</Td>
            <Td>One of `pending`, `completed`, `declined`, `failed`</Td>
          </tr>
          <tr>
            <Td>currency</Td>
            <Td>string</Td>
            <Td>The currency the card transaction settled in</Td>
          </tr>

          <tr>
            <Td>channel</Td>
            <Td>enum</Td>
            <Td>The device where the transaction happened</Td>
          </tr>
          <tr>
            <Td>pin_present</Td>
            <Td>integer</Td>
            <Td>
              A flag 0/1 indicating if the user used a pin when using the card
            </Td>
          </tr>

          <tr>
            <Td>approved</Td>
            <Td>enum</Td>
            <Td>The approved amount of the transaction</Td>
          </tr>
          <tr>
            <Td>total</Td>
            <Td>string</Td>
            <Td>The total amount of the transaction</Td>
          </tr>
          <tr>
            <Td>status</Td>
            <Td>string</Td>
            <Td>
              One of `processing`, `processed`, `reissue`, `verified`, `failed`
            </Td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Cardtranscations;
