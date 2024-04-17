// 5==>10==>20==>null;

// let linkedList = {
//     head: {
//         value: 5,
//         next: {
//             value: 10,
//             next: {
//                 value: 20,
//                 next: null
//             }
//         }
//     }
// }

// in sha Allah, I will damn make it.


class linkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode,
        this.tail = newNode,
        this.length++
        return this
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    printList() {
        const arr = []
        let currNode = this.head;
        while(currNode !== null) {
            arr.push(currNode.value)
            currNode = currNode.next
        }
        return arr
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        if (index === 0) {
            this.prepend(value);
            return this.printList();
          }
        const newNode = {
            value: value,
            next: null
        }

        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next
        leader.next = newNode
        newNode.next = holdingPointer
        this.length++
        return this.printList()
    }
    traverseToIndex(index) {
        let counter = 0;
        let currNode = this.head
        while(counter !== index) {
            currNode = currNode.next
            counter++
        }
        return currNode
    }
}

const myLinkedList = new linkedList(10)
myLinkedList.append(20)
myLinkedList.prepend(4)
myLinkedList.prepend(0)
myLinkedList.printList()
console.log(myLinkedList);
console.log(myLinkedList.printList());
myLinkedList.insert(55, 9)
myLinkedList.insert(1, 8)
console.log(myLinkedList.printList());