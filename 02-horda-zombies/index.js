export function battleHorde(zombies, humans) {
  let z = 0,
    h = 0;

  for (let x = 0; x < zombies.length; x++) {
    z += Number(zombies[x]);
    h += Number(humans[x]);
  }
  if (z > h) return z - h + "z";
  else if (z < h) return h - z + "h";
  return "x";
}
