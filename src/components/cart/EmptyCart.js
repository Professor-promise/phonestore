import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0;
  text-align: center;
  font-weight: 700;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  h1 {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export default function EmptyCart() {
  return (
    <Container>
      <h1>YOUR CART IS CURRENTLY EMPTY</h1>
    </Container>
  );
}
