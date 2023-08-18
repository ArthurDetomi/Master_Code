class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    // adicionando ao final da lista
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    } // O(1)

    // Adiciona um nó ao inicio da lista
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    // Adiciona um nó a um indice especifico se válido
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
        nodeAux.prev = newNode;
        newNode.prev = leaderNode;
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
        nodeToDelete.next.prev = leaderNode;
        nodeToDelete.value = null;
        nodeToDelete.next = null;
        this.length--;
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

const DOUBLY_LINKED_LIST = new DoublyLinkedList(10);

DOUBLY_LINKED_LIST.append(16);
DOUBLY_LINKED_LIST.append(1);


//DOUBLY_LINKED_LIST.prepend(9);
//DOUBLY_LINKED_LIST.insert(1, 98);
//DOUBLY_LINKED_LIST.remove(3);
DOUBLY_LINKED_LIST.remove(1);

console.log(DOUBLY_LINKED_LIST.convertToArray());

console.log(DOUBLY_LINKED_LIST);


