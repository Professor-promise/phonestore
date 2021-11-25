import React from 'react';
import styled from 'styled-components';

export default function Title({ title, name }) {
  return (
    <Container className="container">
      <span>{title} </span>
      {name}
    </Container>
  );
}

const Container = styled.div`
  font-size: 2.3rem;
  padding: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: var(--mainBlue);
  span {
    font-family: cursive;
    color: var(--mainGrey);
  }
`;
