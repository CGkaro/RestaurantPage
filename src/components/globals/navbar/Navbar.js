import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../../Button";
import styled from "styled-components";
import { styles } from "../../../utils";

export default function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
      <ButtonContainer className="navbar-brand">logo</ButtonContainer>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link ">
              Products<span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>

        <Link to="/Cart" className="nav-link ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </div>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  background: ${styles.colors.mainBlue} !important;
  .nav-link {
    color: ${styles.colors.mainWhite} !important;
  }
  .navbar-brand {
    color: ${styles.colors.mainWhite} !important;
    text-transform: capitalize !important;
  }
`;
