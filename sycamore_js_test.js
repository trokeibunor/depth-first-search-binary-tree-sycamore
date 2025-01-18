function solution(T) {
  let maxZigzag = 0;

  // prevDir: null for root, 'L' for came from left, 'R' for came from right
  function findZigzag(node, prevDir, turns) {
    if (!node) return;

    maxZigzag = Math.max(maxZigzag, turns);

    // Go left
    if (prevDir === "R") {
      // Coming from right, going left is a turn
      findZigzag(node.l, "L", turns + 1);
    } else {
      // Coming from left or root, going left is not a turn
      findZigzag(node.l, "L", turns);
    }

    // Go right
    if (prevDir === "L") {
      // Coming from left, going right is a turn
      findZigzag(node.r, "R", turns + 1);
    } else {
      // Coming from right or root, going right is not a turn
      findZigzag(node.r, "R", turns);
    }
  }

  if (!T) return 0;

  // Start from root (no previous direction)
  findZigzag(T, null, 0);

  return maxZigzag;
}
