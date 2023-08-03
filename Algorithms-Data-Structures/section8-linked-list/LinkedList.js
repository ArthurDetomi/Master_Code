class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    _createNode(value) {
        const node = {
            value: value,
            next: null
        };
        return node;
    }

    append(value) {
        const node = this._createNode(value);
        
        if (this.head.next == null) {
            this.head.next = node;
            this.tail = node;
            this.length++;
            return true;
        }
        
        let nodeActual = this.head.next;
        while (nodeActual.next != null) {
            nodeActual = nodeActual.next;
        }
        nodeActual.next = node;
        this.length++;
        this.tail = node;
        return true;
    }

    listValues() {
        let nodeActual = this.head;
        while (nodeActual.next != null) {
            console.log(nodeActual.value);
            nodeActual = nodeActual.next;
        }
        console.log(nodeActual.value);
    }

}

const LINKED_LIST = new LinkedList(10); 
LINKED_LIST.append(5);
LINKED_LIST.append(16);

LINKED_LIST.listValues();


