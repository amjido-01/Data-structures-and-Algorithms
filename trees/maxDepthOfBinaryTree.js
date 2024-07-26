// function maxDepth(root) {
//     if (!root) return null;

//     let max = Math.max(maxDepth(root.left), maxDepth(root.right))

//     return max + 1
// }

function maxDepth(root) {
    if (!root) return 0;

    let level = 0; 
    let queue = [];

    while (queue.length) {
        let count = queue.length;
        for (let i = 0; i < count; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level++;
    }
    return level;
}