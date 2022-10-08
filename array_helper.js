// your class code here

class ArrayHelper {
    constructor(arrayOfNumbers) {
        if(arrayOfNumbers !== undefined) this.arrayOfNumbers = arrayOfNumbers
        else this.arrayOfNumbers = []
    }

    randomGenerator() {
        this.arrayOfNumbers = []
        this.arrayOfNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50))
    }

    extractEven() {
        this.arrayOfNumbers = this.arrayOfNumbers.filter(value => value % 2 === 0)
    }

    extractOdd() {
        this.arrayOfNumbers = this.arrayOfNumbers.filter(value => value % 2 !== 0)
    }

    getMax() {
        return `The minimum value is ${Math.max.apply(null, this.arrayOfNumbers)}`
    }

    getMin() {
        return `The minimum value is ${Math.min.apply(null, this.arrayOfNumbers)}`
    }

    getAverage() {
        const average = this.arrayOfNumbers.reduce((a, b) => a + b, 0) / this.arrayOfNumbers.length
        return `The average value is ${average}`
    }

    retrieve() {
        return this.arrayOfNumbers
    }
}