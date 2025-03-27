import React from 'react'

const Row = ({ guess, currentGuess }) => {

  if (guess) {
    return (
      <div className='row past'>
        {
          guess.map((char, ind) => (
            <div key={ind} className={char.color}>{char.key}</div>
          ))
        }
      </div>
    )
  }

  if (currentGuess) {
    const letters = currentGuess.split("");

    return (
      <div className='row current'>
        {
          letters.map((letter, ind) => (
            <div key={ind} className='filled'>{letter}</div>
          ))
        }
        {
          [...Array(5 - letters.length)].map((_, ind) => (
            <div key={ind}></div>
          ))
        }
      </div>
    )
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Row
