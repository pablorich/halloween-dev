export function escapePyramidHead(room) {
  const nlength = room.length;

  const pyramidFlatIndex = room.flat().findIndex((s) => s === "▲");
  const youFlatIndex = room.flat().findIndex((s) => s === "T");

  const pyramidY = pyramidFlatIndex % room.length;
  const pyramidX = Math.floor(pyramidFlatIndex / room.length);

  const youY = youFlatIndex % room.length;
  const youX = Math.floor(youFlatIndex / room.length);

  const queue = [[pyramidX, pyramidY, 0]];
  const visited = new Set([[pyramidX, pyramidY].toString()]);

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();
    if (youX === x && youY === y) return steps;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || ny < 0) continue;
      if (nx >= nlength || ny >= nlength) continue;
      if (room[nx][ny] === "#") continue;
      if (visited.has([nx, ny].toString())) continue;
      else {
        visited.add([nx, ny].toString());
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  return -1;
}
