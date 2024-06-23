// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.length = 0
//     }

//     peek() {
//         return this.first;
//     }

//     enqueue(value) {
//         const newNode = new Node(value)
//         if (this.length === 0) {
//             this.first = newNode
//             this.last = newNode
//         } else {
//             this.last.next = newNode;
//             this.last = newNode
//         }
//         return this.length++
//     }

//     deQueue() {
//         if (this.length === 0) {
//             return null
//         }
//         if (this.first === this.last) {
//             return null
//         }
//         this.first = this.first.next
//         return this.length--
//     }

//     isEmpty() {
//         return this.length === 0
//     }
// }

class Queue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
       this.first.push(value)
    }

    deQueue() {
       if (this.last.length === 0) {
        while(this.first.length > 0) {
            this.last.push(this.first.pop())
        }
       }
       return this.last.pop()
    }

    peek() {
        if (this.last.length === 0) {
            while(this.first.length > 0) {
                this.last.push(this.first.pop())
            }
        }
        return this.last[this.last.length - 1]
    }
    isEmpty() {
        return this.first.length === 0 && this.last.length === 0;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.deQueue();
myQueue.deQueue();
console.log(myQueue.first);