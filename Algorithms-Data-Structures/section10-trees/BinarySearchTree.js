class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearch {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const insertionNode = new Node(value);
    if (this.root === null) {
      this.root = insertionNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (insertionNode.value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (insertionNode.value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return this;
      }
    }

    currentNode = insertionNode;
    return this;
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return false;
  }

  remove() {}
}

const tree = new BinarySearch();
