function reverse (x,y){
    let arr = new Array();
    for(let i = 0;i < y;i++){
        arr[i] = x++;
    }
    return arr;
}

console.log(reverse(1,4));
