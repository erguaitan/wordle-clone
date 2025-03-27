import React from 'react'

const Modal = ({ isCorrect, turn, solution }) => {
  return (
    <div className='modal-wordle'>
      {
        isCorrect ?
          <div>
            <h1>You Win!</h1>
            <p className='solution-wordle'>{solution}</p>
            <p>You found the solution in {turn} guesses</p>
          </div> :
          <div>
            <h1>Nevermind</h1>
            <p className='solution-wordle'>{solution}</p>
            <p>Better luck next time!</p>
          </div>
      }
    </div>
  )
}

export default Modal
