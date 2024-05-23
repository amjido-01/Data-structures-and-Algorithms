class ListNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    hasCyle(head) {
        let fast = head;

        while(fast && fast.next) {
            head = head.next;
            fast = fast.next.next;
            if(head === fast) return true;
        }
        return false;
    }
}

node1 = new ListNode(3)
node2 = new ListNode(2)
node3 = new ListNode(0)
node4 = new ListNode(-4)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(node1.hasCyle(node1))