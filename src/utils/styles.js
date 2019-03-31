import "../components/layout.css";
export const colors = {
  mainBlue: `#120a87c7`,
  lightBlue: `#009ffd`,
  mainWhite: `#f3f3f3`,
  mainDark: `#232528`,
  mainBlack: `#262626`,
  mainYellow: `#ffa400`,
  mainYellow2: `#F2AF29`,
  mainGrey: `#474747`
};
export const textSlanted = `font-family:'Dancing Script', cursive;`;

export const transDefault = "transition:all 0.5s ease-in-out";
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`;
};
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out"
}) => {
  return `transition: ${property} ${time} ${type}`;
};

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out"
}) => {
  return `transition: ${property} ${time} ${type}`;
};

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white"
}) => {
  return `border:${width} ${type} ${color}`;
};

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`;
};
