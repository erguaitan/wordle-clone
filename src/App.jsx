import React, { use, useEffect, useState } from 'react'
import { obtainNewSolution } from './lib/lib';
import Wordle from './components/Wordle';

const App = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const solution = obtainNewSolution();
    setSolution(solution);
  }, [setSolution])

  return (
    <div className='App'>
      <h1 className='text-2xl text-[#333] py-4 mb-7.5 border-b-2 border-b-[#eee] font-extrabold'>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
