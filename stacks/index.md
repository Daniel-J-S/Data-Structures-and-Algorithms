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

This method is pretty straightforward; its job is to take whatever data we pass to it and use it to create a new `Node` for our Linked List; next, we'll set our new Node's `.next` pointer to whatever our list's current `Top` is. Then, we'll change our `Top` reference pointer to point to the new Node. You'll notice that I'm also incrementing an internal `size` property; we're using to property to, you guessed it, keep track of the size of the Stack.


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

Here's another exciting method. This method begins by performing a null pointer check. It is not immediately apparent how we can perform a null pointer check, but if you're curious, it's because of the `isEmpty()` method being called in the `if` statement within the first line; We will discuss that method in more detail soon. Next, we'll save a reference to the `Top` `Node`'s data and then point the `Top` reference to the current `Node` occupying the `Top` position's `.next` property. Finally, we'll decrement the value we're using to internally track the depth of our Stack and then return our data.

<br>
<br>

## `size`

```js
size() {
    return this.size;
}
```
<br>

This method is one of the more straightforward ones. This method returns the depth of our Stack; it's referring to the same value we've been incrementing and decrementing each time we call our push or pop methods respectfully. 

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

The `.peek()` method is ubiquitous with Stacks; this method first performs a `null` pointer check by calling the `.isEmpty()` method _(we'll get to that method next)_, and returns the value of `undefined` if the Stack is empty. Otherwise, we return the data from the `Node` at the top of our Stack.


<br>
<br>


## `isEmpty`

```js
isEmpty() {
    return this.top === null;
}
```
<br>

I know I've held off long enough from explaining what this method does, but surprisingly, it's very straightforward. This method performs what is known as a `null` pointer check. This phrase is not common in the JavaScript community or as long as I've been a developer. Still, it's a soft nod to what C, C++, and even Java developers have to do, but it's simply a step we need to perform to ensure our `top` reference isn't null or, in other words, a way for us to make sure our Stack isn't empty. This check is an important step we need to complete before performing certain operations as a measure to prevent errors.
<br>
<br>


## Conclusion

That concludes my walkthrough of the Stack data structure as we took some time to discuss what Stacks are, why, and how we use them. I also went over a few examples using a JavaScript class; we started with a straightforward implementation using an Object literal before graduating to a Linked List implementation, which is slightly more complex but more flexible and practical. In the meantime, feel free to check out my other <a href="/articles">articles</a> or leave me a comment below to let me know what you think.

## References

1. <a href="https://www.youtube.com/watch?v=wjI1WNcIntg" target="_blank" rel="noopener noreferrer">Gayle Laakmann Explains Stacks and Queues</a>
1. <a href="https://www.youtube.com/watch?v=Gj5qBheGOEo" target="_blank" rel="noopener noreferrer">Beau from FreeCodeCamp teaches us the Stack Data Structure</a>
1. <a href="https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/" target="_blank" rel="noopener noreferrer">FreeCodeCamp Blog: How to implement a Linked List in JavaScript</a>