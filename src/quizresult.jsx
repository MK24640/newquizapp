import React from 'react'
import questions from './Quiz';

function Quizresult(props) {
  return (
    <div className='score-section'>
        <h2>Completed !</h2>
        <h4>Total Score {props.score}/15</h4>
        <h4>Your Correction Question {props.correctAns} out {questions.length}</h4>
        <button onClick={props.handlPlayAgain}>Play Again</button>
    </div>
  )
}

export default Quizresult;