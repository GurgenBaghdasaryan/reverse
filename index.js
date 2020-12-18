let calculator = {
    read(number1, number2) {
        this.Number1 = number1;
        this.Number2 = number2;
        return this;
    },

    sum() {
        return resultSum = this.Number1 + this.Number2;
    },

    mul() {
        return  resultMul = this.Number1 * this.Number2;
    }
}

console.log(calculator.read(12, 25));
console.log(calculator.sum());
console.log(calculator.mul());