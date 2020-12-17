function range(x, y) {
    let arr = [];

    for (let i = x; i <= y; i++) {
        arr[i - x] = i;
    };

    return arr;
};

console.log(range(10, 1000));
