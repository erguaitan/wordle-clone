import { solutions } from "../constants/constants";

export function obtainNewSolution() {
  const solution = solutions[Math.floor(Math.random() * solutions.length)];
  return solution;
}

export function obtainIndexSolution(ind) {
  const solution = solutions[ind - 1];
  return solution;
}