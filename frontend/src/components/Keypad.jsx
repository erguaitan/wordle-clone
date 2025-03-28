import React from 'react'
import DeleteKey from './icons/DeleteKey';
import EnterKey from './icons/EnterKey';

const Keypad = ({ usedKeys, handleKeyUp }) => {
  const handleClickKeypad = (e) => {
    let key = e.currentTarget.id;
    if (key == "enter") {
      key = "Enter";
    } else if (key == "delete") {
      key = "Backspace";
    }
    handleKeyUp({ key })
  }

  return (
    <div className='keypad'>
      <div className='keypad-row'>
        {
          (["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]).map((letter) => {
            const color = usedKeys[letter]
            return (
              <div key={letter} className={color} onClick={handleClickKeypad} id={letter} >{letter}</div>
            )
          })
        }
      </div>
      <div className='keypad-row'>
        {
          (["a", "s", "d", "f", "g", "h", "j", "k", "l"]).map((letter) => {
            const color = usedKeys[letter]
            return (
              <div key={letter} className={color} onClick={handleClickKeypad} id={letter} >{letter}</div>
            )
          })
        }
      </div>
      <div className='keypad-row'>
        <div className='key-big' key="delete" onClick={handleClickKeypad} id="delete">
          <DeleteKey size='size-6' />
        </div>
        {
          (["z", "x", "c", "v", "b", "n", "m"]).map((letter) => {
            const color = usedKeys[letter]
            return (
              <div key={letter} className={color} onClick={handleClickKeypad} id={letter} >{letter}</div>
            )
          })
        }
        <div className='key-big' key="enter" onClick={handleClickKeypad} id="enter">
          <EnterKey size='size-6' />
        </div>
      </div>
    </div>
  )
}

export default Keypad
