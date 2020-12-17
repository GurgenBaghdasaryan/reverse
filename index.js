function myFunc(x, y) {
    let arr = []
    for (let i = 0; i < y; i++) {
        arr[i] = x++;
    }
    return arr;
}

console.log(myFunc(2, 5));
