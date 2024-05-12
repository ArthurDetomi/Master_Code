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
    const sendValue = new Node(value);
    if (this.length === 0) {
      this.bottom = sendValue;
      this.top = sendValue;
    } else {
      const holdingPointer = this.top;
      this.top = sendValue;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    } else if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

let stack = new Stack();

stack.push("Google");
stack.push("Udemy");
stack.push("Academy");

for (let i = 0, length = stack.length; i < length; i++) {
  let value = stack.peek();
  stack.pop();
  console.log(value);
}
