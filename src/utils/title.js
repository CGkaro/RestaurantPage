import React from "react";
import styled from "styled-components";
import { styles } from "../utils";

export function Title({ title, message }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center">
        <h1 className="text-capitalize font-weight-bold">
          {title} <strong className="text-blue">{message}</strong>
        </h1>
      </div>
    </div>
  );
}
Title.defaultProps = {
  message: "defaultMessage",
  title: "def title"
};
const TitleWrapper = styled.div`
  text-align: center;
  .message {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }
  .title {
    ${styles.letterSpacing({ spacing: "0.3rem" })};
    font-size: 2rem;
    text-transform: uppercase;
    color: ${styles.colors.mainBlack};
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`;
