//	Task: Use the find() method to locate an element in an array based on a specified condition.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.find(number => number % 2 === 0);

console.log(evenNumbers); // 2
