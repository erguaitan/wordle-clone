import React from 'react'
import Row from './Row'

const Grid = ({ currentGuess, guesses, turn}) => {
  return (
    <div>
      {
        guesses.map((guess, ind) => {
          if (turn == ind) {
            return <Row key={ind} currentGuess={currentGuess} />
          }

          return <Row key={ind} guess={guess} />
        })
      }
    </div>
  )
}

export default Grid
