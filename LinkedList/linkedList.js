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
}

const myLinkedList = new linkedList(10)
myLinkedList.append(20)
myLinkedList.prepend(4)
myLinkedList.prepend(0)
myLinkedList.printList()
console.log(myLinkedList);
console.log(myLinkedList.printList());