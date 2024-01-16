import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::befor,
*::after {
  margin: 0;

  
  padding: 0;
  box-sizing: border-box;
}

img {
  object-fit: cover;
  mix-blend-mode: multiply;
}

body {
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box
  }
  a{
    white-space: nowrap;
  }
    background: #eae2bf99;
    
    font-family:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  input[type="checkbox"]{
    display: none;
    }
  
  button {
    background-color: unset;
    border: none;
  }
  
`;
export default GlobalStyle;
