import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './ButtonContainer';
import { Link } from 'react-router-dom';

export default function Details() {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, name, img, price, company, desc, inCart } =
          value.modalProduct;
        return (
          <Container>
            <div className="title">
              <h1>{name}</h1>
            </div>
            <div className="box">
              <div className="image">
                <img src={img} alt={name} />
              </div>
              <div className="text">
                <h4 className="title-text">model: {name}</h4>
                <h4>made by: {company}</h4>
                <h5>price: ${price}</h5>
                <p>
                  some info about the product: <span>{desc}</span>
                </p>
                <div className="buttons">
                  <ButtonContainer color>
                    <Link to="/product">back to products</Link>
                  </ButtonContainer>
                  <ButtonContainer onClick={() => value.addToCart(id)}>
                    <Link to="/cart">
                      <button
                        className="cartBtn"
                        disabled={inCart ? true : false}
                      >
                        {inCart ? 'already in cart' : 'add to cart'}
                      </button>
                    </Link>
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </Container>
        );
      }}
    </ProductConsumer>
  );
}

const Container = styled.div`
  margin: 1rem 4rem;

  .box {
    .image {
      display: block;

      img {
        width: 100%;
        padding-bottom: 0.5rem;
      }
    }
  }
  .title {
    text-align: center;
    text-transform: capitalize;
    color: var(--mainBlue);
  }

  .text {
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 1rem;

    span {
      text-transform: lowercase;
      color: var(--mainGrey);
      font-size: 0.9rem;
      display: block;
    }
  }

  .title-text {
    font-size: 1.6rem;
    padding: 0 0 0.4rem 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    text-transform: uppercase;
    font-weight: 700;
  }
  h4 {
    font-size: 1.4rem;
    padding: 0 0 0.4rem 0;
    font-family: cursive;
    text-transform: capitalize;
  }
  h5 {
    padding: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }
  p {
    font-size: 1.1rem;
    font-family: cursive;
    text-transform: capitalize;
    color: var(--mainBlue);
  }
  span {
    font-size: 0.8rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }

  .buttons {
    display: flex;
    text-transform: capitalize;
  }

  .cartBtn {
    background: none !important;
    border: none;
    color: var(--mainColor);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
      color: var(--mainWhite);
    }
  }
  @media screen and (min-width: 520px) {
    .box {
      display: grid;
      grid-template-columns: auto 1fr;
      width: 60rem;
      margin: 1rem auto;
      justify-items: center;
    }
    .image {
      width: 25rem;
      display: block;
    }
    .title-text {
      font-size: 1.8rem;
    }
    .text {
      margin-top: 2rem;
    }
    .title {
      padding: 2rem 0;
    }
    p {
      font-size: 1.3rem;
      padding: 10px 0;
    }
    span {
      font-size: 1.1rem;
    }
    h5 {
      font-size: 1.4rem;
    }
    h4 {
      font-size: 1.6rem;
    }
  }
`;
