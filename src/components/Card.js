import React, { Component } from 'react';
import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { id, img, name, price, inCart } = this.props.product;
    return (
      <CardContainer>
        <ProductConsumer>
          {(value) => (
            <div className="body">
              <div className="img-body" onClick={() => value.handleDetails(id)}>
                <Link to="/details">
                  <img src={img} alt={name} className="image" />
                </Link>
              </div>
              <div className="body-text">
                <p>{name}</p>
                <p>
                  price: <span>${price}</span>
                </p>
              </div>
              <button
                className="link"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.modalOpen(id);
                  value.addToCart(id);
                }}
              >
                {inCart ? (
                  <p className="link-text" disabled>
                    in cart
                  </p>
                ) : (
                  <FaCartPlus class="icon" />
                )}
              </button>
            </div>
          )}
        </ProductConsumer>
      </CardContainer>
    );
  }
}

const CardContainer = styled.div`
  .body {
    margin: 1rem 1rem;
    width: 15rem;
    position: relative;
    transition: all 1s ease-in-out;
    overflow: hidden;
  }

  .img-body {
    height: 20rem;
    background: var(--mainWhite);
    .image {
      width: 100%;
      text-align: center;
      padding: 2rem 0;
      transition: all 1s ease-in;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .body-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--mainWhite);
    color: var(--mainGrey);
    padding: 0.2rem 0.4rem;
    border: 0.25rem;
    text-transform: capitalize;
    transition: all 1s ease-in;

    p {
      font-size: 1rem;
    }
  }

  .link {
    position: absolute;
    font-size: 2rem;
    right: 0;
    bottom: 3rem;
    padding: 0 0.8rem;
    transform: translate(100%);
    transition: all 1s ease-in;
    overflow: hidden;
    color: var(--mainColor);
    cursor: pointer;
  }

  &:hover .link {
    transform: translate(10%);
  }

  &:hover .body {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }

  &:hover .body-text {
    background: var(--lightGrey);
  }

  button {
    border: none;
    background: transparent;
  }
  .link-text {
    color: var(--mainWhite);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
    background: var(--mainColor);
    padding: 0.4rem;
    border-radius: 0.5rem;
    margin-bottom: inherit;
  }
`;

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
