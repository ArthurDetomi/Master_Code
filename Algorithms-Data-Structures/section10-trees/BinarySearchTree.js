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

  remove(value) {
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.right === null) {
          if (parentNode.right === currentNode) {
            parentNode.right = currentNode.left;
          } else {
            parentNode.left = currentNode.left;
          }
          currentNode = null;
        } else if (currentNode.left === null) {
          if (parentNode.right === currentNode) {
            parentNode.right = currentNode.right;
          } else {
            parentNode.left = currentNode.right;
          }
          currentNode = null;
        } else {
          let rightNode = currentNode.right;
          let leftNode = currentNode.left;

          if (parentNode.right === currentNode) {
            parentNode.right = rightNode;
          } else {
            parentNode.left = rightNode;
          }

          if (rightNode.left === null) {
            rightNode.left = leftNode;
          } else {
            let nodeAux = rightNode;
            while (nodeAux.left !== null) {
              nodeAux = nodeAux.left;
            }
            nodeAux.left = leftNode;
          }

          currentNode = null;
        }

        return true;
      }
    }

    return false;
  }
}

const tree = new BinarySearch();
tree.insert(15);
tree.insert(8);
tree.insert(20);
tree.insert(4);
tree.insert(11);
tree.insert(17);
tree.insert(25);
tree.insert(2);
tree.insert(6);
tree.insert(9);
tree.insert(13);
tree.insert(16);
tree.insert(22);
tree.insert(30);
tree.insert(5);
tree.insert(10);
tree.insert(21);
tree.insert(35);
tree.insert(12);

console.log(tree.remove(4));

let response = JSON.stringify(traverse(tree.root));
console.log(response);

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
