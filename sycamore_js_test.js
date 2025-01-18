class Solution {
    constructor() {
        this.maxZigzag = 0;
    }

    // Main solution function
    solution(T) {
        if (!T) return 0;
        
        // Start DFS from root with both left and right possibilities
        this.findZigzag(T, 'left', 0);
        this.findZigzag(T, 'right', 0);
        
        return this.maxZigzag;
    }
    
    // DFS function to explore all possible paths
    findZigzag(node, direction, turns) {
        if (!node) return;
        
        // Update max zigzag if current path has more turns
        this.maxZigzag = Math.max(this.maxZigzag, turns);
        
        if (direction === 'left') {
            // If we're going left, we can:
            // 1. Continue zigzag by going right (turn)
            this.findZigzag(node.l, 'right', turns + 1);
            // 2. Start new zigzag going left (no turn)
            this.findZigzag(node.l, 'left', 0);
        } else {
            // If we're going right, we can:
            // 1. Continue zigzag by going left (turn)
            this.findZigzag(node.r, 'left', turns + 1);
            // 2. Start new zigzag going right (no turn)
            this.findZigzag(node.r, 'right', 0);
        }
    }
}
