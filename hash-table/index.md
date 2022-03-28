# Hash Table

A hash table is a very popular data structure used store data. It uses a very predicatable pattern of associating a key with data; this is very similar to how a JavaScript Object literal stores data using a `key: value` pair format.

Hash tables are also known as a hash map, associative array and a few other names as well.

A Hash table is a type of data structure; all data structures are designed as such to optimize the process of accessing and putting data.

Most languages support Hash Tables and in JavaScript, Hash Tables are likely used to implement Objects.

## Accessing Data From A Hash Table

The way Hash tables find data is by associating a key with an index, which provides the location of the actual data in an array. The key is passed through what is known as a hash function, which looks up the proper index for that key; once the index is discovered, we can retrieve that piece of data. This is the reason why we typically say that hash tables contain an O(1) lookup time. 

Sometimes, two or more keys can get mapped to the same index; this is called a collision. In order to address this, one thing we could possibly do is add the data at that index to a list; in many cases a linked list is used. This can sometimes increase the lookup time since we'd have to iterate over the list to find the appropriate piece of data.

In summary, the performance of a Hash Table in regards to most aspects such as being able to perform various services on it's data is highly dependent upon the hash function.

Also, the size of the Hash Table can also have an effect on the performance as well.


<br>
<br>
<br>

Here's an example of a very simple implementation of a Hash Table:

```js
class HashTable {
    constructor(size = 10) {
        this.storageLimit = size;
        this.storage = new Array(size);
    }

    _hash(string) {
        let hash = 0;
        for (let i = 0; i < string.length; i++) {
            hash += string.charCodeAt(i);
        }
        console.log(hash);
        return hash % this.storageLimit;
    }

    print() {
        let items = this.storage.flat();
        let result = items.reduce((hashTable, [key, value]) => {
            hashTable[key] = value
            return hashTable;
        }, {});
        console.log(result);
        return result;
    }

    add(key, value) {
        let index = this._hash(key);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            let inserted = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
        this.print();
    }

    remove(key) {
        let index = this._hash(key);
        if (this.storage[index].length === 1 && this.storage[index][0][0]) {
            this.storage.splice(index, 1);
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index].splice(i, 1);
                }
            }
        }
        this.print();
    }

    lookup(key) {
        let index = this._hash(key);
        if (this.storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i];
                }
            }
        }
    }
}

const myNewHashTable = new HashTable(); // Passing in the length is optional
```
<br>
<br>
As we can see, this `Hash Table` is implemented using a JavaScript class. One thing to keep in mind and of course remind ourselves is that it's very unlikely we'd ever need to implement something like this in an actual JavaScript program as we'd likely just use a JavaScript Object literal instead. However, for learning purposes, we'll use this example to get a feel for how Hash Tables work.


For the remaining part of this walkthrough, we'll go through the individual methods to explain what they each do.

<br>
<br>

## `constructor`

```js
constructor(size = 10) {
    this.storageLimit = size;
    this.storage = new Array(size);
}
```
<br>

This method get's called automatically upon instantiation of the class [(see ES6 JavaScript `class` syntax)](#); in this particular case, we have the option to pass in the max length we want for our hash table. The default in this case is 10. We'll use that value to set our storage and storageLength fields.

<br>
<br>

## `_hash`

```js
_hash(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    console.log(hash);
    return hash % this.storageLimit;
}
```
<br>

This is a very simple hash function implementation that creates a sum of all the character codes from each character contained within a provided `key` used to map to a piece of data in our hash table; the assumption here is that we're using the string datatype for our keys.

In addition to console logging the hash result, which again, is simply a sum of each char code contained with the `key` string, we're also returning the result of computing `hash` modulus the storage limit. This is how we calculate the index position of the bucket we'll store our key value pair within the Hash Table.

<br>
<br>

## `print`

```js
print() {
    let items = this.storage.flat();
    let result = items.reduce((hashTable, [key, value]) => {
        hashTable[key] = value
        return hashTable;
    }, {});
    console.log(result);
    return result;
}
```

I had a lot of fun putting this method together; basically, this function produces a human readable view object using a JavaScript Object Literal. Basically, it flattens the storage array removing the empty slots and then maps over the result adding the corresponding `key: value` pairs to a locally intialized JavaScript Object literal. We'll finish the task by console logging and returning the result.

<br>
<br>

## `add`

```js
add(key, value) {
    let index = this._hash(key);
    if (this.storage[index] === undefined) {
        this.storage[index] = [[key, value]];
    } else {
        let inserted = false;
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
                this.storage[index][i][1] = value;
                inserted = true;
            }
        }
        if (inserted === false) {
            this.storage[index].push([key, value]);
        }
    }
    this.print();
}
```

This method does exactly what it says it does; it allows us to add a piece of data to our Hash Table.

First, we start by finding an index to put our new piece of data; we do this by generating a hash using our hash function. Then our next step is to see if anything currently exists at that location within our storage array. If it doesn't exist, we'll insert it there inside of another list we'll use as bucket in the case of a collision.

However, if a bucket does exist, we'll check to see if there's a matching key in that bucket by search each item in the bucket; this would be an O(n) lookup by the way. If we find a matching key, we'll update it's value with the new value provided. However, if we don't have a matching key, we'll simply push our new `key: value` pair into that bucket instead.

<br>
<br>

## `remove`

```js
remove(key) {
    let index = this._hash(key);
    if (this.storage[index].length === 1 && this.storage[index][0][0]) {
        this.storage.splice(index, 1);
    } else {
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
                this.storage[index].splice(i, 1);
            }
        }
    }
    this.print();
}
```

Again, we have a very self-explainatory method here; this method allows us to remove or essentially delete a piece of data from our Hash Table using just the key name.

So, naturally, this method accepts the key name as an argument and uses that key to find the index position in our storage array by invoking our hash function

<br>
<br>


## Lookup

<br>
<br>

## Conclusion


## Resources

- [Stack Overflow Article: How to choose the size of a Hash Table](https://stackoverflow.com/questions/22741966/how-to-choose-size-of-hash-table)