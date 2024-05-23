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

    while (true) {
      if (insertionNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = insertionNode;
          break;
        }

        currentNode = currentNode.left;
      } else if (insertionNode.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = insertionNode;
          break;
        }

        currentNode = currentNode.right;
      } else {
        break;
      }
    }

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
tree.insert(11);
tree.insert(9);
tree.insert(19);
tree.insert(10);
tree.insert(7);

console.log(tree.lookup(19));
console.log(tree.lookup(1));

let response = JSON.stringify(traverse(tree.root));
console.log(response);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
