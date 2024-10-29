export function battleHorde(zombies, humans) {
  const zombieArray = zombies.split("").map(Number);
  const humanArray = humans.split("").map(Number);

  const initialLength = zombieArray.length;

  zombieArray.push(0);
  humanArray.push(0);

  for (let x = 0; x < initialLength; x++) {
    zombieArray[x + 1] +=
      zombieArray[x] > humanArray[x] ? zombieArray[x] - humanArray[x] : 0;
    humanArray[x + 1] +=
      zombieArray[x] < humanArray[x] ? humanArray[x] - zombieArray[x] : 0;
  }
  if (zombieArray[initialLength] > humanArray[initialLength])
    return zombieArray[initialLength] + "z";
  else if (zombieArray[initialLength] < humanArray[initialLength])
    return humanArray[initialLength] + "h";
  return "x";
}
