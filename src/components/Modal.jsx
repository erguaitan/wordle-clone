import React from 'react'
import RetryIcon from './RetryIcon'

const Modal = ({ isCorrect, turn, solution }) => {

  const handleRetry = () => {
    localStorage.removeItem("turn");
    localStorage.removeItem("guesses");
    localStorage.removeItem("history");
    localStorage.removeItem("isCorrect");
    localStorage.removeItem("usedKeys");
    localStorage.removeItem("solution");
    localStorage.removeItem("currentGuess");
    window.location.href = "/";
  }

  return (
    <div className='modal-wordle'>
      <div>
        {
          isCorrect ?
            <>
              <h1>You Win!</h1>
              <p className='solution-wordle'>{solution}</p>
              <p>You found the solution in {turn} guesses</p>
            </> :
            <>
              <h1>Nevermind</h1>
              <p className='solution-wordle'>{solution}</p>
              <p>Better luck next time!</p>
            </>
        }
        <button onClick={handleRetry}>
          <RetryIcon size='size-4' />
          <span>Try another word</span>
        </button>
      </div>
    </div>
  )
}

export default Modal
