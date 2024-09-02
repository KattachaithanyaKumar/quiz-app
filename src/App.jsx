import { useState } from "react";

import sample from "./assets/back.mp4";

const App = () => {
  const questions = [
    {
      question: "what is the color of sky?",
      answers: [
        { answer: "red", isCorrect: false },
        { answer: "yellow", isCorrect: false },
        { answer: "blue", isCorrect: true },
        { answer: "green", isCorrect: false },
      ],
    },
    {
      question: "how many days do we have in a week?",
      answers: [
        { answer: "3", isCorrect: false },
        { answer: "6", isCorrect: false },
        { answer: "9", isCorrect: false },
        { answer: "7", isCorrect: true },
      ],
    },
    {
      question: "How many days are there in a normal year?",
      answers: [
        { answer: 364, isCorrect: false },
        { answer: 365, isCorrect: true },
        { answer: 366, isCorrect: false },
        { answer: 367, isCorrect: false },
      ],
    },
    {
      question: "How many colors are there in a rainbow?",
      answers: [
        { answer: 7, isCorrect: true },
        { answer: 6, isCorrect: false },
        { answer: 8, isCorrect: false },
        { answer: 5, isCorrect: false },
      ],
    },
    {
      question: "How many sides are there in a triangle?",
      answers: [
        { answer: 7, isCorrect: false },
        { answer: 3, isCorrect: true },
        { answer: 5, isCorrect: false },
        { answer: 4, isCorrect: false },
      ],
    },
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { answer: "giraffe", isCorrect: false },
        { answer: "blue whale", isCorrect: true },
        { answer: "octopus", isCorrect: false },
        { answer: "none", isCorrect: false },
      ],
    },
    {
      question: "How many planets are in our solar system?",
      answers: [
        { answer: 7, isCorrect: false },
        { answer: 6, isCorrect: false },
        { answer: 8, isCorrect: true },
        { answer: 5, isCorrect: false },
      ],
    },
    {
      question: "What do bees make?",
      answers: [
        { answer: "honey", isCorrect: true },
        { answer: "gold", isCorrect: false },
        { answer: "milk", isCorrect: false },
        { answer: "oil", isCorrect: false },
      ],
    },
    {
      question: "Which is the fastest land animal?",
      answers: [
        { answer: "lion", isCorrect: false },
        { answer: "zebra", isCorrect: false },
        { answer: "monkey", isCorrect: false },
        { answer: "cheetah", isCorrect: true },
      ],
    },
    {
      question: "What food do pandas eat?",
      answers: [
        { answer: "bamboo", isCorrect: true },
        { answer: "grass", isCorrect: false },
        { answer: "wood", isCorrect: false },
        { answer: "fish", isCorrect: false },
      ],
    },
  ];

  const [questionNo, setQuestionNo] = useState(0);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [start, setStart] = useState(true);

  const handleClick = (isCorrect) => {
    setDisabled(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    let next = questionNo + 1;
    if (next < questions.length) {
      setQuestionNo(next);
      setDisabled(false);
    } else {
      setShowScore(true);
    }
  };

  const reset = () => {
    setShowScore(false);
    setQuestionNo(0);
    setScore(0);
    setDisabled(false);
    setStart(true);
  };

  const startQuiz = () => {
    setStart(false);
  };

  return (
    <div className="app">
      <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>

      {start ? (
        <div className="card">
          <h1 className="title">GENERAL QUIZ</h1>
          <button onClick={startQuiz}>START QUIZ</button>
        </div>
      ) : (
        <>
          {showScore ? (
            <div className="card">
              <p></p>
              <h1>
                your score is {score} / {questions.length}
              </h1>
              <button onClick={reset}>RESET</button>
            </div>
          ) : (
            <div className="card">
              <h4>
                Question {questionNo + 1} / {questions.length}
              </h4>
              <h1 className="question">{questions[questionNo].question}</h1>
              <div className="answers">
                {questions[questionNo].answers.map((options) => (
                  <button
                    disabled={disabled}
                    onClick={() => handleClick(options.isCorrect)}
                  >
                    {" "}
                    {options.answer}{" "}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
