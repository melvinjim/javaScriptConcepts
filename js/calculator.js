class Calculator {
    constructor (first, second){
        this.first = first;
        this.second = second;
    }

    multiplication = () => {
        let operation = this.first * this.second;
        return operation;
    }
}