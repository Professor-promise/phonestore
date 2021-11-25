import React, { Component } from 'react';
import styled from 'styled-components';

export default class CartColumns extends Component {
  render() {
    return (
      <ColumnsContainer>
        <div className="image">
          <h4>image</h4>
        </div>
        <div className="products">
          <h4>product</h4>
        </div>
        <div className="price">
          <h4>price</h4>
        </div>
        <div className="quantity">
          <h4>quantity</h4>
        </div>
        <div className="remove">
          <h4>remove</h4>
        </div>
        <div className="total">
          <h4>total</h4>
        </div>
      </ColumnsContainer>
    );
  }
}

const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-transform: uppercase;
  justify-items: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin: 2rem 0 0 0;
  h4 {
    font-size: 1.4rem;
    font-weight: 700;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
