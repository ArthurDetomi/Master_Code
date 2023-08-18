function soma(lista = [], index) {
    if (index === 0) {
        return lista[index];
    }
    return lista[index] + soma(lista, index - 1);
}

function soma(lista = []) {
    // caso base
    if (lista.length == 0) {
        return 0;
    }
    // Caso recursivo
    let first = lista[0];
    return first + soma(lista.slice(1));
}

function binary_search(lista = [],  target_item, low = 0, high = lista.length - 1) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    const kick = lista[mid];

    if (kick == target_item) {
        return mid;
    } else if (kick < target_item) {
        return binary_search(lista, target_item, mid + 1, high);
    } else if (kick > target_item){
        return binary_search(lista, target_item, low, mid - 1);
    }
} // O(log n)



 // call stack
// lista(lista, 0) ----> agora é finalizada a chamada da pilha retorna no caso 1 e pop() é retirado
// só cai no return a partir daqui
// lista(lista, 1) ----> agora é feito a primeira conta lista[1] + soma(lista, ) obs sabemos o resultado de soma(lista, lista[0]) que é 1 que retornou na anterior logo apos é feito o pop()
// lista(lista, 2) ----> agora é feito a primeira conta lista[2] + soma(lista, ) obs sabemos o resultado de soma(lista, lista[0]) que é 1 que retornou na anterior logo apos é feito o pop()
// lista(lista, 3) ----> agora é feito a primeira conta lista[3] + soma(lista, ) obs sabemos o resultado de soma(lista, lista[0]) que é 1 que retornou na anterior logo apos é feito o pop()
// lista(lista, 4) ----> agora é feito a primeira conta lista[4] + soma(lista, ) obs sabemos o resultado de soma(lista, lista[0]) que é 1 que retornou na anterior logo apos é feito o pop() agora é finalizado e retornado 15 no caso
lista = [1, 2, 3, 4, 5];
console.log(soma(lista, lista.length - 1));

console.log(soma(lista));

console.log(binary_search(lista, 2));
