import React, { use, useEffect, useState } from 'react'
import { obtainNewSolution } from './lib/lib';
import Wordle from './components/Wordle';
import SwapTheme from './components/SwapTheme';

const App = () => {
  const [solution, setSolution] = useState(null);

  const currentTheme = document.documentElement.getAttribute("data-theme");
  console.log("Theme " + currentTheme);
  document.documentElement.setAttribute("data-theme", "dark");
  console.log("Theme " + currentTheme);

  useEffect(() => {
    const solution = obtainNewSolution();
    setSolution(solution);
  }, [setSolution])

  return (
    <div className='App'>
      <h1>Wordle Clone</h1>
      <SwapTheme className={"absolute top-0 right-0 m-4"} size='size-7 m-1' />
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
