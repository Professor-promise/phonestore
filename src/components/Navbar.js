import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import logo from '../logo.svg';
import { ButtonContainer } from './ButtonContainer';

export default function Navbar() {
  return (
    <Nav className="navbar sticky-top">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-item-self">
        <Link to="/product">Product</Link>
      </ul>
      <Link to="/cart">
        <ButtonContainer>
          <span className="px-1">
            <FaCartPlus className="icon" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  background: var(--mainBlue);
  text-transform: capitalize;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: var(--mainWhite);
    transition: all 0.5s ease-in;

    &:hover {
      color: var(--mainColor);
    }
  }

  .icon {
    font-size: 1.6rem;
    margin-right: 0.2rem;
  }
`;
