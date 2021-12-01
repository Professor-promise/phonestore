import React, { Component } from 'react';
import { StoreData, testData } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    testData,
    isModalOpen: false,
    modalProduct: [],
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    StoreData.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product };
    });
  };
  modalOpen = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, isModalOpen: true };
    });
  };

  modalClose = () => {
    this.setState(() => {
      return { isModalOpen: false };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        return this.addTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    let tempTax = subTotal * 0.05;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => this.addTotal()
    );
  };

  decrement = (id) => {
    const tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      return this.removeItem(id);
    } else {
      product.total = product.count * product.price;
    }

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => this.addTotal()
    );
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return { cart: [...tempCart], products: [...tempProducts] };
      },
      () => this.addTotal()
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          modalOpen: this.modalOpen,
          modalClose: this.modalClose,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          clearCart: this.clearCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
