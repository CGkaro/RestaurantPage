import React, { Component } from "react";
import styled from "styled-components";
import { styles } from "../../utils";
//import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: "",
        path: "https://www.facebook.com"
      },
      {
        id: 2,
        icon: "",
        path: "https://www.twitter.com"
      },
      {
        id: 3,
        icon: "",
        path: "https://www.instagram.com"
      }
    ]
  };
  render() {
    return (
      <FooterWrapper>
        <div className="title">Das Handy</div>
        <div className="icons" />
        <p className="copyright">
          copyright &copy; 2024 Das Handy Laden, Powered with react and
          bootstrap.
        </p>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 12rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })}
  }
`;
