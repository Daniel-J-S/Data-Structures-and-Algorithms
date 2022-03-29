class QueueA {
    constructor() {
        this.collection = [];
    }

    print() {
        console.log(this.collection);
    }

    enqueue(element) {
        this.collection.push(element);
    }

    dequeue() {
        return this.collection.shift();
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return !this.collection.length
    }
}

/*
const myQueue = new QueueA()
myQueue.print();
myQueue.enqueue('hello world')
myQueue.print();
myQueue.dequeue()
console.log(myQueue.isEmpty());
*/

// A Queue created with a Linked List

// first, we need a node

class Node {
    constructor(data) {
        this.data = data;
    }
}

class QueueB {

    head = null;
    tail = null;
    collection = []; // just for learning purposes

    isEmpty() {
        return this.head === null;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.head.data;
    }

    viewCollection() {
        console.log(this.collection);
    }

    add(data) {
        const node = new Node(data);
        this.collection.push(node);
        if (this.tail !== null) {
            this.tail.next = node;
        }
        this.tail = node;
        if (this.head === null) {
            this.head = node;
        }
    }

    remove() {
        this.collection.shift();
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        return data;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++
            node = node.next;
        }
        return count;
    }

}

const myQueue = new QueueB()

myQueue.add('world')
myQueue.add('hello')
console.log(myQueue.isEmpty())
// myQueue.remove()
console.log(myQueue.peek())
myQueue.viewCollection()
console.log(myQueue.size())
