import React, { Component } from 'react';
import Card from './Card';
import { ProductConsumer } from '../context';
import Title from './Title';
import styled from 'styled-components';

export default class Product extends Component {
  render() {
    return (
      <>
        <Title title="our" name="products" />
        <ProductContainer>
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Card key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </ProductContainer>
      </>
    );
  }
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  @media screen and (max-width: 790px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 370px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
