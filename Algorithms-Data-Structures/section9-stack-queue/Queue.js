class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldLastest = this.last;
      oldLastest.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    } else if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();

console.log("----- Enqueue --- ");
console.log(queue.enqueue("Arthur"));
console.log(queue.enqueue("João"));
console.log(queue.enqueue("José"));
console.log("----- Dequeue --- ");
console.log("peek");
console.log(queue.peek());
console.log(queue.dequeue());
console.log("peek");
console.log(queue.peek());
console.log(queue.dequeue());
console.log("peek");
console.log(queue.peek());
console.log(queue.dequeue());
