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
const UpdateCardOrder = () => {
  return (
    <>
      <p>
        The only field that can be updated in a card order is the status. Once a
        card order is in `failed` status it can not be reversed. When the card
        order is in `processing` status, it can only be updated to `failed` or
        `verified` status. The card is only issued when the card order is set to
        `verified`
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
            <Td>status</Td>
            <Td>integer</Td>
            <Td>
              One of `processing`, `processed`, `reissue`, `verified`, `failed`
            </Td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default UpdateCardOrder;
