# Hash Table

A hash table is a very popular data structure used store data. It uses a very predicatable pattern of associating a key with data; this is very similar to how a JavaScript Object literal stores data using a `key: value` pair format.

Hash tables are also known as a hash map, associative array and a few other names as well.

A Hash table is a type of data structure; all data structures are designed as such to optimize the process of accessing and putting data.

Most languages support Hash Tables and in JavaScript, Hash Tables are likely used to implement Objects.

## Accessing Data From A Hash Table

The way Hash tables find data is by associating a key with an index, which provides the location of the actual data in an array. The key is passed through what is known as a hash function, which looks up the proper index for that key; once the index is discovered, we can retrieve that piece of data. This is the reason why we typically say that hash tables contain an O(1) lookup time. 

Sometimes, two or more keys can get mapped to the same index; this is called a collision. In order to address this, one thing we could possibly do is add the data at that index to a list; in many cases a linked list is used. This can sometimes increase the lookup time since we'd have to iterate over the list to find the appropriate piece of data.


<br>
<br>
<br>

Here's an example of a very simple implementation of a Hash Table:

```js
class HashTable {
    constructor(size = 10) {
        this.storage = new Array(size);
        this.storageLimit = 10;
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

