class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }

    addTwoNumbers(l1, l2) {
        let list = new ListNode(0)
        let head = list;
        let sum = 0;
        let carry = 0;
    
        while(l1 !== null || l2 !== null || sum > 0) {
            if (l1 !== null) {
                sum += l1.value
                l1 = l1.next
            }
    
            if (l2 !== null) {
                sum += l2.value
                l2 = l2.next
            }
    
            if (sum >= 10) {
                carry = 1;
                sum -= 10
            } else {
                carry = 0;
            }
    
            head.next = new ListNode(sum)
            head = head.next
    
            sum = carry;
            carry = 0
        }
        const result = list.next;
        result.printList();
        return result;
    };
    printList() {
        let current = this;
        let result = '';
        while (current !== null) {
            result += current.value + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}
const node1 = new ListNode(2);
node1.next = new ListNode(4);
node1.next.next = new ListNode(3);

const node2 = new ListNode(5);
node2.next = new ListNode(6);
node2.next.next = new ListNode(4);

const result = new ListNode();
result.addTwoNumbers(node1, node2);