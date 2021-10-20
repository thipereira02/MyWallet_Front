import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #9062BE;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyle;