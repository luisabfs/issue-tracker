import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0%;
    padding: 0;
    margin: 0;
  }

  body {
    background: #383838;
    -webkit-font-smoothing: antialiased;
    font: 16px Montserrat, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
