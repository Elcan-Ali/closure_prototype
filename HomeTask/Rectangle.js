function Rectangle(width, height) {
    this.width = width
    this.height = height
}

Rectangle.prototype.getArea = function () {
    return this.height * this.width
}

let rectangle = new Rectangle(5, 6)
console.log(rectangle.getArea());