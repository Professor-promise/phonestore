import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './ButtonContainer';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { isModalOpen, modalClose } = value;
          const { name, img, price } = value.modalProduct;

          if (!isModalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="modal-content">
                  <h3>item added to the list</h3>
                  <div className="image">
                    <img src={img} alt={name} />
                  </div>
                  <h3>{name}</h3>
                  <h5>
                    price: <span>${price}</span>
                  </h5>
                  <div className="buttons">
                    <ButtonContainer color onClick={() => modalClose()}>
                      <Link to="/product">store</Link>
                    </ButtonContainer>
                    <ButtonContainer onClick={() => modalClose()}>
                      <Link to="/cart">cart</Link>
                    </ButtonContainer>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  display: grid;
  place-items: center;

  .modal-content {
    text-transform: capitalize;
    place-items: center;
    background: var(--mainWhite);
    width: 20rem;
    padding: 1rem 0;
  }
  h3 {
    font-size: 1.4rem;
  }

  h5 {
    color: var(--mainGrey);
    font-family: cursive;
  }

  img {
    padding: 1rem;
    width: 20rem;
  }

  .buttons {
    display: flex;
  }
`;
