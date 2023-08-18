function fat(n) {
    if (n == 0 || n == 1 || n < 0) {
        return 1;
    }
    return n * fat(n - 1);
}

function fat_it(n) {
    if (n == 0 || n == 1 || n < 0) {
        return 1;
    }
    let fat = 1;
    for (let i = 2; i <= n; i++) {
        fat *= i;
    }
    return fat;
}

console.log(fat(5));

console.log(fat_it(5));
