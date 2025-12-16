// Import everything we need
import calculator, { add, subtract, PI } from './calculator.js';
import Product from './product.js';

// Test the imports
console.log('Module loaded successfully!');

// Use the imported functions
const sum = add(10, 5);
const difference = subtract(10, 5);

console.log(`10 + 5 = ${sum}`);
console.log(`10 - 5 = ${difference}`);
console.log(`PI = ${PI}`);

// Use default export
const calc = calculator();
console.log(`Calculator version: ${calc.version}`);


// Create Product instances
const laptop = new Product('Laptop', 999.99);
const phone = new Product('Smartphone', 499.99);

console.log(laptop.getDetails());
console.log(phone.getDetails());

// Make functions available globally (if needed)
window.doMath = {
    add,
    subtract,
    PI
};

console.log('Ready! Open browser console to test.');