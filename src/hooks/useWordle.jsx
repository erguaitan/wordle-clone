import React, { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuesses] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    const solutionArray = [...solution];
    const currentGuessArray = [...currentGuess];

    let formattedGuess = currentGuessArray.map((char, index) => {
      return { key: char, color: "grey" }
    });

    formattedGuess.forEach((char, ind) => {
      if (char.key === solutionArray[ind]) {
        char.color = "green";
        solutionArray[ind] = null;
      }
    });

    formattedGuess.forEach((char) => {
      if (solutionArray.includes(char.key) && char.color !== "green") {
        char.color = "yellow";
        solutionArray[solutionArray.indexOf(char.key)] = null;
      }
    });

    return formattedGuess;
  }

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = formattedGuess
      return newGuesses;
    })
    setHistory((prev) => {
      return [...prev, currentGuess];
    })
    setTurn((prev) => {
      return prev + 1;
    })
    setCurrentGuesses('');
    setUsedKeys((prev) => {
      formattedGuess.forEach(char => {
        const currentColor = prev[char.key];

        if (char.color === "green") {
          prev[char.key] = "green";
        } else if (char.color === "yellow" && currentColor !== "green") {
          prev[char.key] = "yellow";
        } else if (char.color === "grey" && currentColor !== "green" && currentColor !== "yellow") {
          prev[char.key] = "grey";
        }
      })
      return prev;
    });
  }

  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("You used all your guesses");
        return;
      } else if (history.includes(currentGuess)) {
        console.log("You already tried that word");
        return;
      } else if (currentGuess.length !== 5) {
        console.log("Word must be 5 chars long");
        return;
      }

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);

    } else if (key === "Backspace") {
      setCurrentGuesses((prev) => {
        return prev.slice(0, -1)
      })

    } else if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuesses((prev) => {
        return prev + key
      })
    }
  }

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp }
}

export default useWordle
