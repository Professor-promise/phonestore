import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <ErrorWrapper>
      <div>
        <h1>we are sorry, page not found </h1>
        <h3>
          the page you're looking for might have been removed had its name
          change or unavaliable
        </h3>
        <Link to="/">
          <button type="button" className="btn">
            back to homepage
          </button>
        </Link>
      </div>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  display: block;
  height: 90vh;
  display: grid;
  place-items: center;
  div {
    text-transform: uppercase;
    text-align: center;

    h1 {
      color: var(--mainBlue);
      font-weight: 700;
    }
    h3 {
      font-size: 1.4rem;
    }

    .btn {
      width: 14rem;
      background: var(--mainBlue);
      border: 0.125rem solid var(--mainBlue);
      border-radius: 0.5rem;
      font-size: 1.1rem;
      color: var(--mainWhite);
      padding: 0.4rem;
      text-transform: uppercase;
      font-weight: 700;
      transition: all 0.5s ease-in;

      &:hover {
        color: var(--mainBlue);
        background: var(--mainWhite);
      }
      outline: none;
    }
  }
`;
