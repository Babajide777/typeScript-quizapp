export const getQuestions = async () => {
  const ques = await fetch("https://the-trivia-api.com/api/questions?limit=10");
  const data = await ques.json();
  return data;
};
