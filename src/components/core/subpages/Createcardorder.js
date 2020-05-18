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
const SubContent = styled.div`
  padding-left: 10px;
  padding-top: 5px;
`;
const Createcardorder = () => {
  return (
    <>
      <p>
        To create a card order it is necessary to make sure that the entity is
        in tier 2 completed status or the request will return an error. There
        are certain scenarios that influence directly how the card order is
        processed according to the `type` and `status`. The examples are:
      </p>
      <div>
        Types
        <br />- issue
        <SubContent>
          - verified
          <SubContent>
            - When creating a card order of type `issue` under `verified`
            status, the system will try to instantly issue an entity card. In
            case it succeeds, the entity card will come in the request.
          </SubContent>
        </SubContent>
        <SubContent>
          -processing
          <SubContent>
            - When creating a card order of type `issue` under `processing`
            status, it will put the card order in a queue for further processing
            through a batch run.{' '}
          </SubContent>
        </SubContent>
        <SubContent>
          - reissue
          <SubContent>
            - When creating a card order of type `issue` under `reissue` status,
            the system will attempt to instantly reissue the entity card against
            the card program id provided. It is required that the entity has an
            active card so that a reissue is possible.
          </SubContent>{' '}
        </SubContent>
        - upgrade
        <SubContent>
          - verified
          <SubContent>
            - When creating a card order of type `upgrade` under `verified`
            status, the system will try to instantly issue an entity card. In
            case it succeeds, the entity card will come in the request. <br />
            The previous card will be deactivated once the newly issued card is
            activated.
          </SubContent>
        </SubContent>
      </div>
      <br />
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
            <Td>entity_id</Td>
            <Td>integer</Td>
            <Td>The id of the entity that will get the card issued to</Td>
          </tr>
          <tr>
            <Td>card_id</Td>
            <Td>integer</Td>
            <Td>The id of the card program to issue the card against</Td>
          </tr>
          <tr>
            <Td>type</Td>
            <Td>string</Td>
            <Td>One of `issue`, `upgrade`</Td>
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
export default Createcardorder;
