# What are Stacks?

Stacks allow us to manage data collection in an ordered list-like structure, very similar to <a href="/what-is-a-queue" target="_blank" rel="noopener noreferrer">Queues</a>. However, one of the main differences with Stacks is how we add or remove data. Stacks follow a LIFO or _(last in first out)_ approach when it comes to adding/removing data, whereas Queues follow a FIFO or _(first in first out)_ approach; <a href="/what-is-a-queue" target="_blank" rel="noopener noreferrer">I wrote an article on Queues that explains this in more detail</a>.

## Why should we use a Stack

I'll preface by saying that each Data Structure comes with pros and cons depending on how we use them. One of the essential practices of becoming a proficient developer is deciding which tool to use to solve a problem..

When it comes to the Stack data structure, some of the benefits are:

1. They are available in fixed or dynamically sized variants.
2. All critical data operations such as `push()`, `pop()`, `peek()`, `isEmpty()` take `O(1)` time to run.
3. They have a limited interface, and there are only two ways to mutate the stack `push()` and `pop()`.

<br>

## How are Stacks Implemented

An excellent example implementation of a Stack is when we use our browser's back button. Each time we visit a site in our browser, the site's address gets added to the top of the Stack. When we want to navigate back to the last site we visited, we click the back button, and our current site is popped from the Stack, revealing the previous site we visited.

We have the classic JavaScript Call Stack; this list includes execution contexts or stack frames. Speaking of which, I would love to write an article on the Call Stack so we can go into more detail on it as well.


Here's the most common methods or actions we'll need for a Stack data structure

- `.push()` - Pushes a new piece of data on top of the Stack
- `.pop()` - Removes data from the top of the Stack
- `.size()` - Returns the length of the Stack
- `.peek()` - Returns data from the top of the Stack 
- `.isEmpty()` - Returns a boolean indicating the Stack is empty or not 

The JavaScript Array Object has a close resemblance to a Stack, so it's unlikely we'd need to implement a Stack on our own. However, for the purpose of this walkthrough, let's do it anyways.

<br>

Here's an example of a very simple Stack data structure using a JavaScipt class.

```js
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
```

<br>
<br>

Here's a Stack Implemented using a Linked List:

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(top = null) {
        this.top = top;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) return undefined;
        const data = this.top.data;
        this.top = this.top.next;
        this.size--;
        return data;
    }

    size() {
        return this.size;
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.top.data;
    }


    isEmpty() {
        return this.top === null;
    }
}
```

<br>
<br>

While we're thinking about these examples, we should also consider the size because each time we push an item unto the stack, our machine must allocate space to hold it. As I've mentioned before, we can implement Stacks in a fixed or dynamically sized variant; however, keep in mind how this affects space complexity. 

For example, the Call Stack has a fixed size in our browser, making sense for performance reasons and your device's safety and security. Could you imagine if your browser had unlimited access to space on your machine's random access memory or (RAM)? That would be a nightmare, which is why whenever we've accidentally written an infinite loop, our browser has to intervene because we've created a <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">Stack Overflow</a>; now you know where the name originated.


<br>

Let's briefly talk about what each of these methods does; I've decided to focus on the example that uses the Linked List as it's probably the most complex and challenging to understand at first glance.


## `push`

```js
push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
    this.size++;
}
```

<br>


<br>
<br>

## `pop`

```js
pop() {
    if (this.isEmpty()) return undefined;
    const data = this.top.data;
    this.top = this.top.next;
    this.size--;
    return data;
}
```

<br>


<br>
<br>

## `size`

```js
size() {
    return this.size;
}
```
<br>


<br>
<br>

## `peek`

```js
peek() {
    if (this.isEmpty()) return undefined;
    return this.top.data;
}
```


<br>


<br>
<br>


## `isEmpty`

```js
isEmpty() {
    return this.top === null;
}
```
<br>


<br>
<br>


## Conclusion


## References

1. <a href="https://www.youtube.com/watch?v=wjI1WNcIntg" target="_blank" rel="noopener noreferrer">Gayle Laakmann Explains Stacks and Queues</a>