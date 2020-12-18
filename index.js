let calculator = {
    read(number1, number2) {
        this.Number1 = number1;
        this.Number2 = number2;
        console.log(this);
    },

    sum() {
        this.result = this.Number1 + this.Number2;
        return this.result;
    },

    mul() {
        this.resultMul = this.Number1 * this.Number2;
        return this.resultMul;
    }
}

calculator.read(4, 5);
console.log(calculator.sum());
console.log(calculator.mul());