class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value)
        if (!root) {
            this.root = newNode;
        } else {
            let curNode = this.root
            while(true) {
                if (curNode.value > value) {
                    if (!curNode.left) {
                        curNode.left = newNode;
                        return this
                    }
                    curNode = curNode.left
                } else {
                    if (!curNode.right) {
                        curNode.right = newNode;
                        return this
                    }
                    curNode = curNode.right;
                }
            }
        }
    }
}