class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }

  print() {
    return this.data;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const stack = new Stack();

stack.push("Arthur");
stack.push("joão");
stack.push("Augusto");

stack.pop();
stack.pop();
stack.pop();

stack.push("Arthur");
stack.push("joão");

console.log(stack.peek());
