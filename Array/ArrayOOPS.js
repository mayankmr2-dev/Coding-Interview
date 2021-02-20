// Array Using Class OOPS

class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index]
    }

    push(element) {
        this.data[this.length] = element
        this.length++
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

}

const a1 = new Array();
a1.push("One")
a1.push("Two")
a1.push("Three")
a1.push("Four")
a1.push("Five")
// console.log(a1.pop())
a1.delete(0)
console.log(a1.get(0));// a1.pop()
console.log(a1);


