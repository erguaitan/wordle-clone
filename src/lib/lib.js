import { letters, solutions } from "../constants/constants";

export function obtainNewSolution () {
  const solution = solutions[Math.floor(Math.random() * solutions.length)];
  
  return solution.word;
}

export function obtainLettersKeyPad () {
  return letters;
}