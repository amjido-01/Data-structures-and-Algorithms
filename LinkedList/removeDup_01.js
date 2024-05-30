function removeDup(head) {
    let res = head;

    while(head){
        if (head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    return res
}