import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, usedKeys, turn } = useWordle(solution);
  const [showModal, setShowModal] = useState(() => {
    if (isCorrect || turn > 5) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect || turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} handleKeyUp={handleKeyUp} />
      {showModal && <Modal isCorrect={isCorrect} solution={solution} turn={turn} />}
    </div>
  )
}

export default Wordle
