function tamanho_lista(lista = []) {
    if (lista.length == 0) {
        return 0;
    }
    return  1 + tamanho_lista(lista.slice(1));
}

function maior_elemento(list) {
    if (list.length === 1) {
      return list[0];
    }
    
    const first = list[0];
    const rest = list.slice(1);
    const maxRest = maior_elemento(rest);
    
    return first > maxRest ? first : maxRest;
}

console.log(tamanho_lista([1, 2, 3, 4, 5]));

console.log(maior_elemento([1, 2, 10, 4, 5], [1, 2, 10, 4, 5].length - 1));