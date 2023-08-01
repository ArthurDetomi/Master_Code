function first_recurring_with_set(array = []) {
    if (array === null || array.length < 0) {
        return;
    }
    const S = new Set();
    for (let i = 0; i < array.length; i++) {
        if (S.has(array[i])) {
            return array[i];
        }
        S.add(array[i]);
    }
    return undefined;
} // Complexidade de tempo O(n) de memória tambem

function first_recurring_with_map(array = []) {
    if (array === null || array.length < 0) {
        return;
    }
    const M = {};
    for (let i = 0; i < array.length; i++) {
        if (M[array[i]]){
            return array[i];
        }
        M[array[i]] = true;
    }
    return undefined;
} // Complexidade de tempo O(n) de memória tambem

function first_recurring(array = []) {
    if (array === null || array.length < 0) {
        return;
    }
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] === array[j]) {
                return array[i];
            } 
        }
    }
    return undefined;
}

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 1, 9];

const array4 = [2, 5, 5, 2, 1];

console.log("Teste Set")
console.log(first_recurring_with_set(array1));
console.log(first_recurring_with_set(array2));
console.log(first_recurring_with_set(array3));
console.log(first_recurring_with_set(array4));

console.log("Teste Map")
console.log(first_recurring_with_map(array1));
console.log(first_recurring_with_map(array2));
console.log(first_recurring_with_map(array3));
console.log(first_recurring_with_map(array4));

console.log("Teste Desafio")
console.log(first_recurring(array1));
console.log(first_recurring(array2));
console.log(first_recurring(array3));
console.log(first_recurring(array4));