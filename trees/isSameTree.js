function isSameTree(p, q) {
    if (!p && !q) return true;

    if (p && q && p.value === q.value) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
}