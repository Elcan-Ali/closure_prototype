function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.getFullInfo = function () {
    return `This name is ${this.name} and age ${this.age}`
}

const person = new Person("Memmedaga", 85)
console.log(person.getFullInfo());