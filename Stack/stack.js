class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        console.log(holdingPointer, "holdingPointer");
        this.top = newNode;
        console.log(this.top, "this.top");
        this.top.next = holdingPointer;
        console.log(this.top.next, "this.top.next");  
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      this.top = this.top.next;
      this.length--;
      return this;
    }
  }
  
  const myStack = new Stack();
  console.log(myStack.push("google"));
  console.log(myStack.push("microsoft"));
  console.log(myStack.peek());
//   console.log(myStack.pop());
//   console.log(myStack.pop());



//   class Stack {
//     constructor(){
//       this.stack = [];
//     }
//     peek() {
//       return this.stack[this.stack.length-1];
//     }
//     push(value){
//       return this.stack.push(value);
//     }
//     pop(){
//       return this.stack.pop();
//     }
//   }
  
//   const myStack = new Stack();
//   myStack.peek();
//   myStack.push('google');
//   myStack.push('ztm');
//   myStack.push('discord');
//   myStack.peek();
//   myStack.pop();
//   myStack.pop();
//   console.log(myStack)
//   myStack.pop();
  
  
  //Discord
  //ZTM
  //google
  