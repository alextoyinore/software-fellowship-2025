// Named exports
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export { add, subtract };

export const PI = 3.14159;

// Default export
export default function calculator() {
    console.log('Calculator module loaded!');
    return {
        version: '1.0',
        author: 'You'
    };
}
