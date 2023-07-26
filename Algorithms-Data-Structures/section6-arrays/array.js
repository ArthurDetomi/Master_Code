class DinamicArray {
    constructor() {
        this.lenght = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.lenght] = item;
        this.lenght++;
        return this.lenght;
    }

    pop() {
        const lastItem = this.data[this.lenght - 1];
        delete this.data[this.lenght - 1];
        this.lenght--;
        return lastItem;
    }

    view() {
        console.log('Data:')
        for (let i = 0; i < this.lenght; i++) {
            console.log('  ' + this.data[i]);
        }
    }

    delete(index) {
        if (index < 0 || index >= this.lenght) {
            return 'Indice invalido mula';
        }
        const itemRemoved = this.data[index];
        _shiftItems(index);
        return itemRemoved;
    }
    
    _shiftItems(index) {
        for (let i = index; i < this.lenght - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.lenght - 1];
        this.lenght--;
    }   
}

const object = new DinamicArray();

object.push('ben 10');
object.push('Hi');
object.push('you');
object.push('ola');
object.push('tudo');

console.log(object.get(0));
console.log(object.pop());
console.log(object.delete(-1)); // ben 10 foi removido

object.view();