//  Copy List with Random Pointer

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

const copyRandomList = function(head) {
    if (!head) {
        return null;
    }

    let current = head;
    while(current) {
        let newNode = new Node(current.val, current.next, null);
        current.next = newNode;
        current = newNode.next;
    }

    current = head
    while(current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    current = head;
    let newHead = head.next;
    while(current) {
        let copiedNode = current.next;
        current.next = copiedNode.next;
        if (copiedNode.next) {
            copiedNode.next = copiedNode.next.next;
        }
        current = current.next;
    }
    // print list
    return newHead;
}