// Getters and Setters

class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }

    set width(value) {
        this._width = value > 0 ? value : this._width
    }

    set height(value) {
        this._height = value > 0 ? value : this._height
    }

    get area() {
        return this.width * this.height
    }

    get perimeter() {
        return (2 * this.width) +  (2 * this.height)
    }
}

const rect = new Rectangle()
rect.height = 20
rect.width = 30

console.log(rect.area);

