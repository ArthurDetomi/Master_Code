// first thought, concatenation
function reverse_str(str = '') {
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'Invalid argument idiot';
    }
    let aux = '';
    for (let i = str.length - 1; i >= 0; i--) {
        aux += str[i];
    }
    return aux;
};

// implementation with array
function reverse_str_with_array(str = '') {
    if (!str || str.length < 2 || typeof string != 'string') {
        return 'Invalid argument idiot';
    }
    let aux = [];
    for (let i = str.length - 1, pos = 0; i >= 0; i--) {
        aux[pos++] = str[i];
    }
    return aux.toString;
};

const reverse3 = str => [...str].reverse().join('');

var string = 'Hello World whith concatenation!';
string = reverse_str(string);
console.log(string);

var string2 = 'Hello World with array!';
string2 = reverse_str(string2);
console.log(string2);

var string3 = 'Hello World with very boring!';
string3 = reverse3(string3);
console.log(string3);