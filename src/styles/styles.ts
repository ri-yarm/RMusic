import { createGlobalStyle } from "styled-components";

export const theme = {};
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;

    height: 100%;
    width: 100%;
  }
  
  ul, ol {
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }
`;
