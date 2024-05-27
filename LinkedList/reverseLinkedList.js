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
    
}

let myLinkedList = new ListNode(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(8);
console.log(myLinkedList.printList());