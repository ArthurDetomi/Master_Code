
const cache = new Map();

function fib_recursive(n) {
    if (cache.has(n)) {
        return cache.get(n);
    }

    let result;
    if (n < 2) {
        result = n;
    } else {
        result = fib_recursive(n - 1) + fib_recursive(n - 2);
    }

    cache.set(n, result);
    return result;    
} // O(n)

function fib_it(n) {
    if (n < 2) {
        return n;
    }
    let first = 0;
    let prox = 1;

    let fat;
    for (let i = 1; i < n; i++) {
        fat = prox + first;
        let aux = prox;
        prox = fat;
        first = aux;
    }
    return fat;
}


console.log(fib_recursive(1000));

console.log(fib_it(100));