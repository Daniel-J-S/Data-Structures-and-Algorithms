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
        const data = this.storage[this.count];
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
/*
const newStack = new Stack();

newStack.push({ name: 'daniel' })
newStack.push({ name: 'peter' })
newStack.push({ name: 'cami' })
newStack.pop()
console.log(newStack.peek())
console.log(newStack.size())

console.log(newStack);

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(top = null) {
        this.top = top;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        if (this.isEmpty()) return undefined;
        const data = this.top.data;
        this.top = this.top.next;
        return data;
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.top.data;
    }

    size() {
        let count = 0;
        let node = this.top;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    isEmpty() {
        return this.top === null;
    }
}

// const myNewStack = new Stack2()

// console.log(myNewStack)
// myNewStack.push(42)
// console.log(myNewStack)
// myNewStack.push(13)
// console.log(myNewStack)
// myNewStack.push(18)
// myNewStack.pop()
// myNewStack.pop()
// console.log(myNewStack)
// console.log(myNewStack.size())