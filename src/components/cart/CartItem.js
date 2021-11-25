import React from 'react';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

export default function CartItem({ value, item }) {
  const { id, img, name, count, price, total } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <Container>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="products">
        <h5>
          <span>Product: </span> {name}
        </h5>
      </div>
      <div className="price">
        <h5>
          <span>price: </span> ${price}
        </h5>
      </div>
      <div className="quantity">
        <div className="decrement" onClick={() => decrement(id)}>
          -
        </div>
        <div className="count">{count}</div>
        <div className="increment" onClick={() => increment(id)}>
          +
        </div>
      </div>
      <div className="remove" onClick={() => removeItem(id)}>
        <FaTrash className="icon" />
      </div>
      <div className="total">
        <h5>
          <span>total: </span> ${total}
        </h5>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-transform: uppercase;
  place-items: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin: 0.5rem 0;

  .image {
    width: 6rem;
    img {
      width: 100%;
    }
  }

  .quantity,
  .remove {
    cursor: pointer;
  }

  .remove {
    color: var(--mainRed);
    font-size: 1.2rem;
  }

  .quantity {
    display: flex;
    font-weight: 700;
    font-size: 1.2rem;
    place-items: center;
    text-align: center;
    div {
      border: 2px solid var(--mainGrey);
      width: 2.5rem;
      padding: 0.5rem;
      margin: 0.4rem;
      transition: all 0.5s ease-in;

      &:hover {
        background: var(--mainGrey);
        color: var(--mainWhite);
      }
    }
  }

  span {
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;

    .image {
      width: 7rem;
    }
    h5 {
      font-size: 1.2rem;
    }
    span {
      display: inline-block;
      color: var(--lightRed);
    }
  }
`;
