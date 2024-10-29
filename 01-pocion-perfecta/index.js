export function createMagicPotion(potions, target) {
  for (let y = 1; y < potions.length; y++) {
    for (let x = 0; x < y; x++) {
      if (potions[x] + potions[y] === target) return [x, y];
    }
  }

  return undefined;
}
