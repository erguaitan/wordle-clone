import React, { useEffect, useState } from 'react'
import { obtainLettersKeyPad } from '../lib/lib';

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    const letters = obtainLettersKeyPad();
    setLetters(letters);
  }, [setLetters])

  return (
    <div className='keypad'>
      {
        letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key]

          return (
            <div key={letter.key} className={color} >{letter.key}</div>
          )
        })
      }
    </div>
  )
}

export default Keypad
