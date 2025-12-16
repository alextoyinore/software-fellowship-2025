// JavaScript OOP Inheritance

class Animal {
    constructor(name) {
        this.name = name
    }

    speak(){
        return `${this.name} makes a sound`
    }

    eat() {
        return `${this.name} is eating...`
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }

    // Method Overriding
    speak() {
        return `${this.name} is barking`
    }

    // Dog specific method
    fetch() {
        return `${this.name} fetches the bone`
    }
}

const animal = new Animal('Hippopotamus') // instance of parent class Animal
const jack = new Dog('Jack', 'Allsatian') // instance of child class Dog
jack.name = 'Bruno'

console.log(animal.speak());
console.log(jack.name);
console.log(jack.eat());


