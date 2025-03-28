const url = import.meta.env.MODE === "development" ? "http://localhost:3000/solution" : "/solution"

export async function obtainNewSolution() {
  const response = await fetch(url);
  const data = await response.json();
  const solution = data.data;

  return solution;
}

export async function obtainIndexSolution(ind) {
  const response = await fetch(`${url}/${ind}`);
  const data = await response.json();
  const solution = data.data;

  return solution;
}