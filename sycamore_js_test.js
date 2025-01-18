function solution(T) {
  let maxZigzag = 0;

  function findZigzag(node, prevDir, turns) {
    if (!node) return;

    maxZigzag = Math.max(maxZigzag, turns);

    // Go left
    if (prevDir === "R") {
      findZigzag(node.l, "L", turns + 1);
    } else {
      findZigzag(node.l, "L", turns);
    }

    // Go right
    if (prevDir === "L") {
      findZigzag(node.r, "R", turns + 1);
    } else {
      findZigzag(node.r, "R", turns);
    }
  }

  if (!T) return 0;

  findZigzag(T, null, 0);

  return maxZigzag;
}
