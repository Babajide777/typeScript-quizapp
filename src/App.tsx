import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { AppStyled } from "./styles/AppStyled";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  const [questions, setQuestions] = useState<[] | null>([]);
  const [currentScore, setCurrentScore] = useState<number>(0);

  useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions?limit=10")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <AppStyled>
      <GlobalStyled />
      <h1>React Quiz</h1>
      <button className="start">Start</button>
      <p className="score">Score: {currentScore}</p>
      <QuestionCard />
    </AppStyled>
  );
}

export default App;
