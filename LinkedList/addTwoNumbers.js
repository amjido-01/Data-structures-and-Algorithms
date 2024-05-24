class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }

    addTwoNumbers(l1, l2) {
        let list = new ListNode(0);
        let head = list;
        let carry = 0;
        let sum = 0;

        while(li !== null || l2 !== null || sum > 0) {
            if (l1 !== null) {
                sum += l1.value;
                l1 = l1.next;
            }

            if (l2 !== null) {
                sum += l2.value;
                l2 = l2.next
            }

            if (sum >= 10) {
                carry = 1;
                sum = sum - 10;
            }

            head.next = new ListNode(sum);
            head = head.next

            sum = carry;
            carry = 0
        }
        return list.next;
    }

}
