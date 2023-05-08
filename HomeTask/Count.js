function Outer() {
    let count = 0
    function increment() {
        return count++
    }
    function decrement() {
        return count--
    }
    return {
        increment,
        decrement
    }
}

const { increment, decrement } = Outer()
console.log(increment());
console.log(decrement());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(decrement());
