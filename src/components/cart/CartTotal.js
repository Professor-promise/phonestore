import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CartTotal({ value }) {
  const { cartTotal, cartSubTotal, cartTax, clearCart } = value;
  return (
    <Container>
      <Link to="/">
        <button type="button" className="btn" onClick={() => clearCart()}>
          clear cart
        </button>
      </Link>
      <div className="section">
        <div className="subtotal">
          <h3>
            subtotal: <span>${cartSubTotal}</span>{' '}
          </h3>
        </div>
        <div className="tax">
          <h3>
            tax: <span>${cartTax}</span>
          </h3>
        </div>
        <div className="total">
          <h3>
            total: <span>${cartTotal}</span>
          </h3>
        </div>
      </div>
    </Container>
  );
}

export default CartTotal;

const Container = styled.div`
  display: grid;
  margin: 1rem 4.5rem;
  justify-items: right;

  .btn {
    width: 14rem;
    border: 0.115rem solid var(--mainRed);
    padding: 0.4rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.5s ease-in;

    &:hover {
      background: var(--mainRed);
      color: var(--mainWhite);
    }
    outline: none;
  }
  .section {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    margin: 1rem 0;
    text-align: right;
    text-transform: uppercase;
    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      padding: 0.1rem 0;
    }
  }

  @media (max-width: 768px) {
    place-items: center;
    .section {
      text-align: center;
      h3 {
        font-size: 1.2rem;
        padding: 0 0;
      }
    }
  }
`;
