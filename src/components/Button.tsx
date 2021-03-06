import React from "react";
import styled from "styled-components";

type IButton = {
  answer: string;
};

const ButtonStyled = styled.button`
  cursor: pointer;
  user-select: none;
  font-size: 0.8rem;
  width: 100%;
  height: 40px;
  margin: 5px 0px;
  background: linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180));
  border: 3px solid rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 1px 2px 0px;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0 0 0 / 25%) 0px 1px 0px;
`;

const handleClick = (e: any) => {
  console.log(e.target.value);
};

const Button = ({ answer }: IButton) => {
  return (
    <ButtonStyled value={answer} onClick={handleClick}>
      {answer}
    </ButtonStyled>
  );
};

export default Button;
