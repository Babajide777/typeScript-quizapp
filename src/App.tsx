import React, { useEffect, useState } from "react";
import { getQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";
import { AppStyled } from "./styles/AppStyled";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  const [questions, setQuestions] = useState<[] | null>([]);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async function anyNameFunction() {
      // console.log(await getQuestions());
      // console.log("here");
      setQuestions(await getQuestions());
    })();
  }, []);

  console.log(questions);

  let num: number = 6;
  let question: string = "who is jide?";
  let answers: string[] = ["jide", "peter", "oyafemi", "boss"];
  let correctAnswer: string = "peter";

  const nextQuestion = () => {};

  const checkAnswer = () => {};

  return (
    <AppStyled>
      <GlobalStyled />
      <h1>React Quiz</h1>
      {startQuiz ? null : (
        <button className="start" onClick={() => setStartQuiz(true)}>
          Start
        </button>
      )}
      {startQuiz ? (
        <>
          {loading ? (
            <>
              <p className="score">Score: {currentScore}</p>
              <QuestionCard
                num={num}
                question={question}
                answers={answers}
                correctAnswer={correctAnswer}
                callback={checkAnswer}
              />
              <button className="next-question" onClick={nextQuestion}>
                Next Question
              </button>
            </>
          ) : (
            <p className="loading">Loading Questions...</p>
          )}
        </>
      ) : null}
    </AppStyled>
  );
}

export default App;
