class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(data) {
        this.storage[this.count] = data;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--
        let data = this.storage[this.count];
        delete this.storage[this.count];
        return data;

    }

    size() {
        return this.count;
    }

    peek() {
        return this.storage[this.count - 1];
    }
}

const newStack = new Stack();

newStack.push({ name: 'daniel' })
newStack.push({ name: 'peter' })
newStack.push({ name: 'cami' })
newStack.pop()
console.log(newStack.peek())
console.log(newStack.size())

console.log(newStack);