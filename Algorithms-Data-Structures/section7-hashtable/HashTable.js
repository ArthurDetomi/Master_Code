class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        if (!key || typeof key != 'string' || key.length <= 0) {
            return false;
        }
        let pos = this._hash(key);
        if (!this.data[pos]) {
            this.data[pos] = [];
        }
        this.data[pos].push([key, value]);
        return true;
    } // O(1)

    get(key) {
        if (!key || typeof key != 'string' || key.length <= 0) {
            return undefined;
        }
        let pos = this._hash(key);

        const currentBucket = this.data[pos];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    } // O(1) quando não há colisão

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            let currentBucket = this.data[i];
            if (currentBucket) {
                for (let j = 0; j < currentBucket.length; j++) {
                    keysArray.push(currentBucket[j][0]);
                }
            }
        }
        return keysArray;
    } // Um dos pontos negativos que para percorrer temos que passar por varios dados vazios dependente do tamanho da hash, imagine se ela tivesse 500000 dados por exemplo, totalmente inviavel para percorrer valores
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('banana', 278);

console.log(myHashTable.get('apples'));
console.log(myHashTable.get('grapes'));


console.log(myHashTable);

console.log(myHashTable.keys());
