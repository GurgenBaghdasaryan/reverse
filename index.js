let calculator = {
    read(number1, number2) {
        this.Number1 = number1;
        this.Number2 = number2;
        return this;
    },

    sum() {
        this.resultSum = this.Number1 + this.Number2;
        return this.resultSum;
    },

    mul() {
        this.resultMul = this.Number1 * this.Number2;
        return this.resultMul;
    }
}

console.log(calculator.read(12, 25));
console.log(calculator.sum());
console.log(calculator.mul());