var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    let length = 1;
    let current = head;
    while (current.next) {
        current = current.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head; 

    let new_tail_position = length - k - 1;
    current = head;
    for (let i = 0; i < new_tail_position; i++) {
        current = current.next;
    }

    let new_tail = current;
    let new_head = new_tail.next;

    new_tail.next = null;
    current = new_head;
    while (current.next) {
        current = current.next;
    }
    current.next = head;

    return new_head;
};

