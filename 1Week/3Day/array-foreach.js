let arr = [1, 1, 2, 3, 5, 8, 13, 21];

const cb = (ele, index) => {
    console.log(`ele + 5 = ${ele + 5} at index of ${index}`);
}

arr.forEach(cb);

Object.getPrototypeOf(arr).myForEach = function(someCb) {
    for (let i = 0; i < this.length; i++) {
        // this uses the value first, then the index
        someCb(this[i], i);
    }
}

//arr.myForEach(cb)
console.log(arr);