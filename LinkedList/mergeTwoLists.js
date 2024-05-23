class ListNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;

    while(l1 && l2) {
        if (li.value <= l2.value) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1) {
        curr.next = l1
    }else {
        curr.next = l2
    }
    return dummy.next;
}
