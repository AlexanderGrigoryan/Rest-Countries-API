import { createGlobalStyle } from "styled-components";

interface GlobalStylesProps {
  darkMode: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Nunito Sans", sans-serif;
  background: ${(props) => (props.darkMode ? "#202C36" : "#FAFAFA")};
}
`;

export default GlobalStyles;
