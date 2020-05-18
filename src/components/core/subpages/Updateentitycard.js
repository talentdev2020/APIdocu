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
const UpdateEntityCard = () => {
  return (
    <>
      <p>
        Updating certain card fields will be required so that the card functions
        properly. Below are the use cases and fields that can be updated for the
        user's card.
      </p>
      <p>
        <strong>**Activation**</strong>
      </p>
      <p>
        The activation process is very simple, it is required to send the
        `activated` field set to `1` and the `cvv` information on the request
        body. Both are mandatory for activation, once successful the card will
        be ready for usage.
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
            <Td>activated</Td>
            <Td>integer</Td>
            <Td>The activated flag should be set to 1</Td>
          </tr>
          <tr>
            <Td>cvv</Td>
            <Td>string</Td>
            <Td>The 3 digit CVV number in the back of the card</Td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong> **Lock/Unlock Feature**</strong>
      </p>
      <div>
        The lock and unlock feature is also very simple, essentially the card is
        unlocked by default, which means the `locked` flag is set to `0`. To
        lock a card, simply update the `locked` field to `1`. After locking the
        card, any authorization that is received will automatically be declined
        until it is unlocked again.
      </div>

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
            <Td>locked</Td>
            <Td>integer</Td>
            <Td>
              The locked flag should be set to 1 for lock 0 for unlocking
              (default)
            </Td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>**Freeze Feature**</strong>
      </p>
      <div>
        The freeze feature was introduced to provide the issuer a way to freeze
        operations on the card in a way that it overrides the lock/unlock
        feature explained before. It is a flag only the issuer should set in
        case of actual need.
      </div>

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
            <Td>freeze</Td>
            <Td>integer</Td>
            <Td>
              The freeze flag should be set to 1 to freeze 0 to unfreeze
              (default)
            </Td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default UpdateEntityCard;
