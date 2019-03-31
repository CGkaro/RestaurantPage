import styled from "styled-components";
import { styles } from "../utils";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.07rem solid ${styles.colors.lightBlue};
  border-color: ${styles.colors.lightBlue};
  color: ${styles.colors.lightBlue};
  border-radius: 0.4rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${styles.colors.lightBlue};
    border: 0.07rem solid ${styles.colors.mainBlue};
    color: ${styles.colors.mainBlue};
  }
  &:focus {
    outline: none;
  }
`;
