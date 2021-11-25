import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg from '../bg.png';

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="text">
          <h1>
            <span>Online</span> Shopping{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, ea quod dicta saepe magni libero! Facilis pariatur
            perferendis harum impedit. Necessitatibus, at. A delectus eos iusto,
            ad officiis sed iure sint in voluptas ex esse, aut, repudiandae
            aliquid error pariatur.
          </p>
          <button className="button">
            <Link to="/product">shop now</Link>
          </button>
        </div>
        <div className="image">
          <img src={bg} alt="bg" />
        </div>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  max-width: 1280px;
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-items: space-between;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;

  .text {
    width: 50rem;
    padding: 0 5rem;
    h1 {
      font-weight: 700;
      color: #f24291;
      font-size: 4rem;
    }
  }
  span {
    display: block;
    color: #f5823e;
    font-size: 5rem;
    line-height: 4rem;
  }
  p {
    font-size: 1rem;
    padding: 1rem 0;
  }
  .image {
    width: 50rem;
    align-self: right;
    display: block;

    img {
      width: 100%;
    }
  }

  .button {
    text-transform: uppercase;
    background: #f5823e;
    outline: none;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.4rem;
    color: white;
    border-radius: 0.5rem;
    transition: all 0.5s ease-in;

    &:hover {
      background: #f24291;
    }
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: var(--mainWhite);
  }

  @media screen and (max-width: 781px) {
    .image {
      display: none;
    }
  }
`;
