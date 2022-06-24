import styled from "styled-components";

export const AppStyled = styled.main`
  width: 100%;
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Fascinate Inline";
    background-image: linear-gradient(rgb(255, 255, 255), rgb(135, 241, 255));
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(rgb(0, 133, 163) 2px 2px);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color: black;
  }

  .start {
    cursor: pointer;
    background: linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145));
    border: 2px solid rgb(211, 133, 88);
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
    border-radius: 10px;
    height: 40px;
    margin: 20px auto;
    padding: 0px 40px;
  }

  .score {
    color: rgb(255, 255, 255);
    font-size: 2rem;
    margin: 0px;
  }

  .next-question {
    cursor: pointer;
    background: linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145));
    border: 2px solid rgb(211, 133, 88);
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0px 40px;
  }
`;
