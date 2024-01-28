import { useState } from 'react'
import './App.css'
import questions from './Quiz'
import Quizresult from './quizresult'

function App () {
  let [clicked ,setClicked] = useState(false);
  let [showResult, setShowresult] = useState(false)
  let [currentQuestion, setcurrentQuestion] = useState(0)
  let [score, setScore] = useState(0)
  let [correctAns, setCorrectAns] = useState(0)
  function handleNextOption () {
    setClicked(false)
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setcurrentQuestion(nextQuestion)
    } else {
      setShowresult(true)
    }
    setClicked(true);
  }
  function handleAnswerOption (isCorrect) {
    if (isCorrect) {
      setScore(score + 5)
      setCorrectAns(correctAns + 1)

    }
  }

  function handlPlayAgain () {
    setcurrentQuestion(0)
    setScore(0)
    setCorrectAns(0)
    setShowresult(false)
  }
  return (
    <>
      <div className='app'>
        {showResult ? (
          <Quizresult
            score={score}
            correctAns={correctAns}
            handlPlayAgain={handlPlayAgain}
          />
        ) : (
          <>
            <div className='question-section'>
              <h5>Score :{score}</h5>
              <div className='question-count'>
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <div className='question-text'>
                {questions[currentQuestion].questionsText}
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((ans, index) => {
                return (
                  <button
                  
                    key={index}
                    onClick={() => handleAnswerOption(ans.isCorrect)}
                  >
                    {ans.answerText}
                  </button>
                )
              })}

              <div className='actions'>
                <button onClick={handlPlayAgain}>Quit</button>
                <button  onClick={handleNextOption}>Next</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default App
