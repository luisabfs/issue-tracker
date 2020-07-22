import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0%;
    padding: 0;
    margin: 0;
    outline: 0;

    &:focus {
      box-shadow: inset 0 0 0 3pt #82FFF9;
    }
  }

  body {
    background: #383838;
    color: #fafafa;
    -webkit-font-smoothing: antialiased;
    font: 16px Montserrat, sans-serif;
  }

  #root {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
