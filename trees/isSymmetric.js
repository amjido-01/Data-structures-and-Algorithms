function isSymmetric(root) {
    function isMirror(left, right) {
        if (!left && !right) return false
        if (!left || !right || left.value !== right.value) return false;

        return isMirror(left.left, right.right) && isMirror(left.right, right.left)
    }

    return isMirror(root.left, root.right)
}