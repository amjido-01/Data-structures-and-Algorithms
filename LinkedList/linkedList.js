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
        this.tail = this.head
        this.length = 1
    }
}

const myLinkedList = new linkedList(10)
console.log(myLinkedList);