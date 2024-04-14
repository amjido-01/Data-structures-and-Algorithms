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
        this.tail = this.head;
        this.length = 1
    }
    // append at the end of the linked list
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
}

const myLinkedList = new linkedList(10)
myLinkedList.append(20)
console.log(myLinkedList);