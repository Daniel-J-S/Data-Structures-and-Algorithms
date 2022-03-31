# Queue

A queue is a data structure that organizes its data in a list-like format; this means they are very similar to a Stack data structure. Queues are also flexible regarding their size as they don't need to have a limit set from the beginning, like a Hash Table, for example.

When comparing the Queue to other data structures like the Stack, the key difference is how we remove data from them. 

For example, a queue uses a first in, first out the approach or FIFO approach. One way to visualize a Queue is to imagine a line of people waiting to purchase their groceries at a grocery store. The people who are first in line are the same people who get served at the checkout stand first.

When creating a Queue from scratch, there are a few methods along with their descriptions we should consider adding to it at a bare minimum:

- `print` - Prints the queue.
- `enqueue` - Adds a node to the tail of the Queue list
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

As we can see, in this case, the Queue is implemented using an Array. However, we've wrapped it in a class with custom prototype methods that enforce expected Queue behavior.

Here's another example of a Queue, but instead of using an Array, as the first example, this one uses a Linked List:

```js

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(head=null, tail=null) {
        this.head = head;
        this.tail = tail;
        this.collection = []; 
    }

    print() {
        let node = this.head;
        while (node) {
            this.collection.push(node)
            node = node.next;
        }
        console.log(this.collection);
    }

    enqueue(data) {
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

<br>
<br>

I'm sure you're probably wondering why we would choose a Linked List over an Array to store the value in our Queue. The main reason is that Linked Lists give us a performance and memory management advantage over Arrays. 

For example, in some languages, we must determine the length of an Array upon initialization; this is not ideal for a Queue as we'd want to have as much flexibility as possible.

Although fixed Array length isn't necessarily a problem in JavaScript, we still want to consider good design practices that we can implement in more than one language.

By default, the JavaScript Array type benefits us slightly: they store their values at an indexed position, and indexes generally help improve lookup time. However, some overhead is required to maintain this index. 

As far as other examples are concerned, imagine the resources needed to remove an item from an Array versus a Linked List.

Assuming we know the index position of the item we need to remove, we can perform the appropriate steps to remove it. However, once we remove the item, all the remaining items need to be shifted to cover the vacant position, which increases time complexity by n items to complete this operation. 

With Linked Lists, removing the `head` or the `tail` node comes with a time complexity cost of `O(1)`, and there's no need to perform a traversal of the entire List to update an index or anything like that; all we have to do is update the values/pointers of the new `head` or `tail` node. 

In the worst-case scenario, our time complexity could increase if we have to delete a node from the middle of our Linked List.

Unless we have a reference to that node, we'd need to traverse the List until we find it, which would increase time complexity to `O(n)`.

 Then all we need to do is update the `.next` property(ies) of the remaining node(s) depending on whether or not we're working with a singlely or doubly Linked List. 

 Alright, now let's discuss the following instance methods of our most recent Queue example:

<br>
<br>

## `print` 

```js
print() {
    let node = this.head;
    while (node) {
        this.collection.push(node)
        node = node.next;
    }
    console.log(this.collection);
}
```
<br>

There should be no surprise about what this method does. It is often necessary to print the contents of our list to see its inner values, which is precisely what this method does. However, I can't say this is a standardized way of doing this; when writing this Queue, I decided to add this `print` method that, once invoked, iterates over the entire list and pushes each `node` into an array and then prints the array to the console.

<br>
<br>

## `enqueue`

```js
enqueue(data) {
    const node = new Node(data);
    if (this.tail !== null) {
        this.tail.next = node;
    }
    this.tail = node;
    if (this.head === null) {
        this.head = node;
    }
}
```

<br>

As a reminder, we're using a Linked List to create our Queue, so there's a `Node` class we defined earlier that we're using to instantiate for our enqueued data. Once invoked, `enqueue` takes the data needed to be stored and then creates a new node. Next, we'll set our tail node's `.next` property to our new `node`, as long as it's not empty. Then, we'll point our reference to the tail `node` itself to the new `node`.

Lastly, if our reference to the `head` node is empty, we'll also point it to the `node`.

I know some of this might seem out of context or perhaps a little confusing because Linked Lists are a separate concept from Queues, and I plan to write a dedicated article on them soon.

<br>
<br>

## `dequeue`

```js
dequeue() {
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head === null) {
        this.tail = null;
    }
    return data;
}
```

<br>

This method removes from the front of the Queue as I've described earlier. 

So, first, we'll create a reference to the data within the node we're removing so we can return it later. Then we perform the removal of the `node` by pointing our reference to `head` to the `.next` property of the `head` node we're removing. We'll finish this part up by checking if our updated `head` reference is `null`, and if it is, we'll set the tail to `null` as well; by the way, this means the list is empty.


<br>
<br>

## `front or peek` 

```js
front() {
    if (this.isEmpty()) return null;
    return this.head.data;
}
```
<br>

This method is also called `peek` in some instances, but it provides us with the convenience of checking the data in the front of our Queue. Of course, if the Queue is empty, we'll return `null` instead.



<br>
<br>

## `size` 

<br>
<br>

## `isEmpty` 

<br>
<br>

## Conclusion

<br>
<br>

## References