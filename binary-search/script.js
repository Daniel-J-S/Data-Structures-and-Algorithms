function createIntArr(min, max) {
    const arr = [min];
    while (min !== max) {
        arr.push(++min);
    }
    return arr;
}

const ints = createIntArr(1, 100);


function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1
        } else if (target < arr[mid]) {
            end = mid - 1
        }
    }
    return -1;
}

console.log(binarySearch(99, ints));