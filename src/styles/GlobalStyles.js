import  {createGlobalStyle}  from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {
        --header-bg: #393646;
        --body-bg: #F4EEE0;
        --decoratio-white: #F4EEE0;
        --gray-bg: #5b2a8c;
    }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  html{
      scroll-behavior: smooth;
  }
  body {
      background: var(--body-bg);
      font-family: 'Montserrat', sans-serif;
      width: 100%;
    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;
