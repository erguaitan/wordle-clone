import React, { use, useEffect, useState } from 'react'
import { obtainIndexSolution, obtainNewSolution } from './lib/lib';
import Wordle from './components/Wordle';
import SwapTheme from './components/SwapTheme';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    let solution;
    if(localStorage.getItem("solution")) {
      const solutionObject = obtainIndexSolution(parseInt(localStorage.getItem("solution"))); 
      solution = solutionObject.word;
    } else {
      const solutionObject = obtainNewSolution();
      localStorage.setItem("solution", solutionObject.id);
      solution = solutionObject.word;
    }
    setSolution(solution);
  }, [setSolution])

  return (
    <div className='App'>
      <h1>Wordle Clone</h1>
      <SwapTheme className={"absolute top-0 right-0 m-4"} size='size-7 m-1' />
      {solution && <Wordle solution={solution} />}
      <Toaster />
    </div>
  )
}

export default App
