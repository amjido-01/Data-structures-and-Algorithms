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

class linkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
            this.tail = this.head,
            this.length = 1
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode;
        this.length ++
        return this
    }
    printList() {
        const array = []
        let currNode = this.head;
        while(currNode !== null) {
            array.push(currNode.value)
            currNode = currNode.next
        }
        return array;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null
        }
    }
}

const myLinkedList = new linkedList(10)
myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.prepend(1)
myLinkedList.insert(99, 400)
let print = myLinkedList.printList()
console.log(print);