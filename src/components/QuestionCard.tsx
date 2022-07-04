import React from "react";
import styled from "styled-components";
import Button from "./Button";

type IQuestionCard = {
  num: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  callback: Function;
};

const QuestionCardStyled = styled.div`
  width: 100%;
  max-width: 1100px;
  background: rgb(235, 254, 255);
  border-radius: 10px;
  border: 2px solid rgb(0, 133, 163);
  padding: 20px;
  box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
  text-align: center;

  p {
    font-size: 1rem;
  }
  .answers {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const QuestionCard = ({
  num,
  question,
  answers,
  correctAnswer,
}: IQuestionCard) => {
  return (
    <QuestionCardStyled>
      <p className="number">Question: {num} / 10</p>
      <p className="question">{question}</p>
      <div className="answers">
        {answers.map((answer, i) => (
          <Button answer={answer} key={i} />
        ))}
      </div>
    </QuestionCardStyled>
  );
};

export default QuestionCard;
