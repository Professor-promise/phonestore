import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Details from './components/Details';
import Error from './components/Error';
import Cart from './components/cart/Cart';
import Home from './components/Home';
import Modal from './components/Modal';
import Copyright from './Copyright';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Error} />
        </Switch>
        <Copyright />
        <Modal />
      </>
    );
  }
}
