# Queue

A queue is a data structure that organizes it's data in a list-like format; this means they are very similar to a Stack data structure. Queues are also flexible in regards to their size as they don't need to have a limit set from the beginning, like a Hash Table for example.

When comparing the Queue to other data structures like the Stack, the key difference is the way how data is removed from them. 

For example, a queue uses a first in first out approach or FIFO approach. One way to visualize a queue is to imagine a line of people waiting to purchase their groceries at a grocery store. The people who are first in line are the same people who get served at the checkout stand first.

When creating a Queue from scratch, there are a few methods along with their descriptions we should consider adding to it at a bare minimum:

- `print` - Prints the queue.
- `enqueue` - Adds a node to the tail of Queue list
- `dequeue` - Removes a node from the head of a Queue list
- `front or peek` - Returns the data from the head of the Queue 
- `size` - Returns the length or size of the Queue
- `isEmpty` - Returns `true` if the Queue list is empty


Here's a very simple example of a Queue:

```js
class Queue {
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
```
<br>

As we can see, in this case, the Queue is implemented using an Array, however we've wrapped it in a class with custom prototype methods that enforce expected Queue behavior.

Here's another example of a Queue, but instead of using an Array, like the first example, this one uses a Linked List:

```js

lass Node {
    constructor(data) {
        this.data = data;
    }
}

class Queue {

    head = null;
    tail = null;
    collection = []; // just for learning purposes

    print() {
        console.log(this.collection);
    }

    enqueue(data) {
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

    dequeue() {
        this.collection.shift();
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        return data;
    }

    front() {
        if (this.isEmpty()) return null;
        return this.head.data;
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

    isEmpty() {
        return this.head === null;
    }

}
```