import React, { useEffect, useState } from 'react'
import { obtainLettersKeyPad } from '../lib/lib';

const Keypad = ({ usedKeys, handleKeyUp }) => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    const letters = obtainLettersKeyPad();
    setLetters(letters);
  }, [setLetters]);

  const handleClickKeypad = (e) => {
    const key = e.target.id;
    if (key == "enter") {
      key = "Enter";
    } else if (key == "delete") {
      key = "Backspace";
    }
    handleKeyUp({key})
  }

  return (
    <div className='keypad'>
      {
        letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key]

          return (
            <div key={letter.key} className={color} onClick={handleClickKeypad} id={letter.key} >{letter.key}</div>
          )
        })
      }
    </div>
  )
}

export default Keypad
