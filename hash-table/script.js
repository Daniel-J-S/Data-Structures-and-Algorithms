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
        console.log(hash)
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
                this.storage[index].push([key, value])
            }
        }
        this.print();
    }

    remove(key) {
        let index = this._hash(key);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            this.storage.splice(index, 1)
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index].splice(i, 1);
                }
            }
        }
        this.print()
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

myNewHashTable.add('name', 'Daniel')
myNewHashTable.add('location', 'Fort Worth')
myNewHashTable.add('age', 37)
myNewHashTable.remove('name')
console.log(myNewHashTable.lookup('age'))
