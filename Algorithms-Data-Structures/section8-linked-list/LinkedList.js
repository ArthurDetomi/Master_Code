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
        
        let currentNode = this.head;
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }

        let nodeAux = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nodeAux;
        this.length++;
        return this;
    }

    convertToArray() {
        const array = [];

        let currentNode = this.head;
        while (currentNode.next !== null) {
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
//LINKED_LIST.prepend(9);

console.log(LINKED_LIST.convertToArray());


