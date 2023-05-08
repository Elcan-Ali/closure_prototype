Array.prototype.last = function () {
    if (this.length) {
        return this[this.length - 1];
    }
    return -1
}

let arr =[]
let arr2 =[1,4,5,6,7,8]
console.log(arr.last());
console.log(arr2.last());