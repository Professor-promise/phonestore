import React from 'react';
import styled from 'styled-components';

export default function Copyright() {
  return (
    <Container>
      <h1>Copyright 2021 &copy; dubeTexPRO</h1>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  background: var(--mainBlue);
  position: fixed;
  padding: 0.3em;
  bottom: 0;
  width: 100%;
  text-align: center;

  margin-top: 2rem;
  h1 {
    font-size: 1.1rem;
    color: var(--mainWhite);
  }
`;
