class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    } // O(1)

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index > (this.length - 1) || index < 0) {
            console.error("Bad");
            return undefined;
        }
        if (index == 0) {
            this.prepend(value);
            return this;
        }
        const newNode = new Node(value);

        const leaderNode = this._traverseToIndex(index);
        let nodeAux = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = nodeAux;
        this.length++;
        return this;
    }

    _traverseToIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    remove(index) {
        if (index > (this.length - 1) || index < 0) {
            console.error("Bad");
            return undefined;
        }

        const leaderNode = this._traverseToIndex(index);

        const nodeToDelete = leaderNode.next;
        leaderNode.next = nodeToDelete.next;
        nodeToDelete.value = null;
        nodeToDelete.next = null;
        this.length--;
        return this;
    }
    // analisar depois
    reverse() {
        if (this.head.next == null) {
            return this.head;
        }
        
        let first = this.head;
        this.tail = this.head;
        let second = this.head.next;

        while (second != null) {
            const temp = second.next;
            second.next = first;
            first = second;
        }

        this.head.next = null;
        this.head = first;
        return this;
    }

    convertToArray() {
        const array = [];

        let currentNode = this.head;

        for (let i = 0; i < this.length; i++) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    } // O(n)

    size() {
        return this.length;
    } // O(1)

}

const LINKED_LIST = new LinkedList(10);

LINKED_LIST.append(16);
LINKED_LIST.append(1);
LINKED_LIST.insert(2, 99);
LINKED_LIST.prepend(9);
LINKED_LIST.insert(1, 98);
LINKED_LIST.remove(3);
LINKED_LIST.remove(1);

console.log(LINKED_LIST.convertToArray());


