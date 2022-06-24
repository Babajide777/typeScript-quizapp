import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    font-family: 'Catamaran', sans-serif;
    background-image: url("./nattu.jpg");
    background-size: cover;
    #root{
      max-width: 100%;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
}

`;
