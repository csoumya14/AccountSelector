import { createGlobalStyle } from "styled-components";
import img from "../assets/background.jpg";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
    }
  body {  
    margin: 0px;
    padding: 0;
    background-image: url(${img});
    background-size: contain;
    font-family: 'Manrope', sans-serif;
    overflow-x:hidden;  
  }
`;

export default GlobalStyle;
