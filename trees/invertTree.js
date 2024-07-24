function invertTree(root) {
    if (!root) return null;

    let left = root.left;
    let right = root.right

    root.left = invertTree(right);
    root.right = invertTree(left)

    return root
}