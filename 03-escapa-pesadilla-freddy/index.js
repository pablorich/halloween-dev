// const dream = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]

export function findSafestPath(dream) {
  const nlength = dream.length - 1;
  const mlength = dream[0].length - 1;

  let best = Infinity;

  function recursiveTree(n, m, sum) {
    if (sum > best) return;
    if (n === nlength && m === mlength) {
      if (sum < best) best = sum;
      return;
    }
    if (n < nlength) {
      recursiveTree(n + 1, m, sum + dream[n + 1][m]);
    }
    if (m < mlength) {
      recursiveTree(n, m + 1, sum + dream[n][m + 1]);
    }
  }
  recursiveTree(0, 0, dream[0][0]);

  return best;
}
