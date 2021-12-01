import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import { ProductConsumer } from '../../context';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <>
                <Title title="your" name="title" />
                <CartColumns />
                <CartList value={value} />
                <CartTotal value={value} history={this.props.history} />
              </>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    );
  }
}
