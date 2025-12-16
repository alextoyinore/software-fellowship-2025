// Classes in JavaScript
class Person {

    nationality;
    
    constructor(name, age, gender, nationality='Nigerian') {
        this.name = name || 'John Doe';
        this.age = age;
        this.gender = gender
        this.nationality = nationality
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    static species() {
        return 'Homo sapiens';
    }

}

const ben = new Person('Ben', 87, 'male')
const bolu = new Person('Bolu', 14, 'girl')

// console.log(ben.greet(), bolu.greet(), Person.species())

class Maths {
    // Some static math methods
    static add(x, y) {
        return x + y
    }

    static subtract(x, y) {
        return x - y
    }

    static multiply(x, y) {
        return x * y
    }

    static divide(x, y) {
        return x / y
    }

    abs = (x, y) => x % y
}

const adding = Maths.add(65, 42)
const substract = Maths.subtract(65, 42)
const abs = Maths.abs // Not accessible

console.log(adding, substract);


// Private fields

class BankAccount {
    #balance; // private field
    accountName;

    constructor (initialBalance = 0, accountName) {
        this.#balance = initialBalance
        this.accountName = accountName
    }

    // deposit
    deposit = (amount) => (amount > 0) ? this.#balance + amount : 'Invalid amount'

    // withdraw
    withdraw = (amount) => (amount > 0 && amount <= this.#balance) ? this.#balance - amount : 'Something went wrong'

    getBalance = () => this.#balance
}

const boluAccount = new BankAccount(6000000, 'Boluwatife Lawanson')
// console.log('Account Name: ', boluAccount.accountName);
// console.log('Account Balance: ', boluAccount.getBalance());

