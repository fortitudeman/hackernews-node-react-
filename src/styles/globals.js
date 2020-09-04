import { createGlobalStyle } from 'styled-components';
import {tablet} from "../styles/mediaQueries"

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Verdana, Geneva, sans-serif;
      font-size: 10pt;
      color: #828282;
      overflow-x: hidden;
      ${tablet} {
        margin: 0;
      }
    }
    a {
      text-decoration: none; 
      color: black !important;
      margin: 4px;
      &:visited {
        color: white;
      }
    }
    span {
      color: black;
    }
  `;

export default GlobalStyles;