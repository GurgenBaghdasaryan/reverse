let reverse = (str) => {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    };
    return newString;
}

const reversed = reverse("Baghdasaryan");

console.log(reversed);
