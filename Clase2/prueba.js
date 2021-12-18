const operacion = (a, b, callback) => callback(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b
const divi = (a, b) => a / b;
const modulo = (a, b) => a % b;

console.log(operacion(4, 5, suma));
console.log(operacion(4, 5, resta));
console.log(operacion(4, 5, mult));
console.log(operacion(4, 5, divi));
console.log(operacion(4, 5, modulo));