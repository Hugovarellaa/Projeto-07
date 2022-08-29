import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select, textarea {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button{
    cursor: pointer;
  }

  [disable]{
    opacity: 0.7;
    cursor: not-allowed;
  }
`