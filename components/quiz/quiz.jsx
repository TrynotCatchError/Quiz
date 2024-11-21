"use client";
import { questions } from "./questions";
import { useState } from "react";
import "./styles.css";

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = questions[currentQuestion];

  function handleOptionSelect(option) {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function handleNextClick() {
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion((prevQn) => prevQn + 1);
    }
    setShowAnswer(false);
    setSelectedOption("");
  }

  function restartQuiz() {
    setShowResults(false);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedOption("");
    setShowAnswer(false);
  }

  return (

   <div className="con">  
    <div className="quiz-app-container">
      {showResults ? (
        <div className="results-section">
          <h2>Quiz Completed</h2>
          <p>
            You scored <strong>{score}</strong> out of {questions.length}
          </p>
          <button onClick={restartQuiz} className="restart-btn">
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-section">
          <header className="quiz-header">
            <h2>Quiz Application</h2>
          </header>
          <main className="quiz-body">
            <h1 className="question">
              {question.id}. {question.question}
            </h1>
            <div className="options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${
                    showAnswer && option === question.answer
                      ? "correct"
                      : showAnswer && option === selectedOption
                      ? "incorrect"
                      : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                  disabled={showAnswer}
                >
                  {option}
                </button>
              ))}
            </div>
          </main>
          <footer className="quiz-footer">
            <p>
              Question {currentQuestion + 1} of {questions.length}
            </p>
            <button
              onClick={handleNextClick}
              className="next-btn"
              disabled={!showAnswer}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </footer>
        </div>
      )}
    </div>
  </div>
 
  );
}
