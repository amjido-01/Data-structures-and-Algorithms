const deleteDuplicates = function(head) {
    let dummyNode = new ListNode(0)
    dummyNode.next = head 
    let list = dummyNode


    while (list.next && list.next.next) {
        if (list.next.val === list.next.next.val) {

            while (list.next && list.next.next && list.next.val === list.next.next.val) {
                list.next = list.next.next
            }
            list.next = list.next.next
        } else {
            list = list.next
        }
    }
    return dummyNode.next
};