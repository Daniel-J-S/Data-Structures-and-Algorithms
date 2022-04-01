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
        this.data = data
        this.next = null
    }
}

class Stack2 {
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

    isEmpty() {
        return this.top === null;
    }
}