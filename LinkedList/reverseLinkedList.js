class ListNode {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    printList() {
        let arr = []
        let currNode = this.head;
        while(currNode !== null) {
            arr.push(currNode.value)
            currNode = currNode.next
        }
        return arr
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        this.tail = this.head;
        while(curr) {
            let nextTemp = curr.next;

            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        this.head = prev;
        return this.printList();
        // return this.printList();
        // return prev;
    }
}

let myLinkedList = new ListNode(10);
// myLinkedList.reverse()
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(8);
myLinkedList.append(15);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());