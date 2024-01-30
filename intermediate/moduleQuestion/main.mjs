//Create multiple modules and demonstrate the use of import/export statements to organize code.


import { square, cube } from './utils';
import { add, subtract, multiply, divide } from './mathOperations';

const num1 = 5;
const num2 = 2;

console.log(`Square of ${num1}: ${square(num1)}`);
console.log(`Cube of ${num1}: ${cube(num1)}`);

console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);
console.log(`Division: ${divide(num1, num2)}`);
