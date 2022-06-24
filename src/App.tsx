import { async } from "q";
import React, { useEffect, useState } from "react";
import { getQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import { AppStyled } from "./styles/AppStyled";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  const [questions, setQuestions] = useState<[] | null>([]);
  const [currentScore, setCurrentScore] = useState<number>(0);

  useEffect(() => {
    (async function anyNameFunction() {
      setQuestions(await getQuestions());
    })();
  }, []);

  console.log(questions);

  let num: number = 6;
  let question: string = "who is jide?";
  let answers: string[] = ["jide", "peter", "oyafemi", "boss"];
  let correctAnswer: string = "peter";

  return (
    <AppStyled>
      <GlobalStyled />
      <h1>React Quiz</h1>
      <button className="start">Start</button>
      <p className="score">Score: {currentScore}</p>
      {/* {questions} */}
      <QuestionCard
        num={num}
        question={question}
        answers={answers}
        correctAnswer={correctAnswer}
      />
      <button className="next-question">Next Question</button>
    </AppStyled>
  );
}

export default App;
