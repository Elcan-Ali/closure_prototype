function Animal(name) {
    this.name = name
}
Animal.prototype.eat = function () {
    return `${this.name} is eating food`
}
const rabbit = new Animal("Rabbit")
console.log(rabbit.eat());