import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  // html,
  // body {
  //   color: ${({ theme }) => theme.colors.primary};
  //   padding: 0;
  //   margin: 0;
  //   font-family: 'Roboto', sans-serif;
  // }
  // a {
  //   color: inherit;
  //   text-decoration: none;
  // }
  // * {
  //   box-sizing: border-box;
  // }
  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS
    html {
      box-sizing: border-box;
    }
    Only using * omits pseudo elements so specifically include these
    * , *:before, *:after {
      box-sizing: inherit;
    }
  */

  html {
    box-sizing: border-box;
    font-size: 16px;
    display:block;
    height: 100%;
    width: 100%;
    margin:0 auto;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin: 0;
    min-height:100vh;
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    font-style: normal;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  ol,
  ul {
    list-style: none;
  }
  // img {
  //   max-width: 100%;
  //   height: auto;
  // }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, textarea, button {
    font-family: inherit
  }
`

export default GlobalStyle
