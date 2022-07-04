export const getQuestions = async () => {
  const ques = await fetch("https://the-trivia-api.com/api/questions?limit=10");
  const data = await ques.json();

  let arr: any;

  if (Array.isArray(data)) {
    let newData = data.map((eachData) => {
      let restructuredData = [
        ...eachData.incorrectAnswers,
        eachData.correctAnswer,
      ];

      return {
        answers: restructuredData,
        question: eachData.question,
        correctAnswer: eachData.correctAnswer,
      };
    });
    arr = [...newData];
  }

  let newArr = arr.map((eachArr: any) => {
    let reArrangedArray = {
      answers: shuffleArray(eachArr.answers),
      question: eachArr.question,
      correctAnswer: eachArr.correctAnswer,
    };

    return reArrangedArray;
  });

  return newArr;
};

const shuffleArray = (a: any) => a.sort(() => Math.random() - 0.5);
