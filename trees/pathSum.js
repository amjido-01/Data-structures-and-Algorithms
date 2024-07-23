function hasPathSum(root, targetSum) {
    if (!root) return false

    targetSum -= root;
    if(root.left == null && root.right) {
        return targetSum == 0
    }

    return (hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum))
}