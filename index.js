let calculator = {
    read(number1, number2) {
        this.Number1 = number1;
        this.Number2 = number2;
    },

    sum() {
        return this.Number1 + this.Number2;
    },

    mul() {
        return this.Number1 * this.Number2;
    }
}

calculator.read(12, 25);
console.log(calculator.sum());
console.log(calculator.mul());