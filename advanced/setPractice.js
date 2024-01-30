//Task: Use a Set to store unique values and perform operations like adding, deleting, and checking existence.

const set = new Set();

set.add(1);
set.add(2);

console.log(set.has(1)); // true

set.delete(1);

console.log(set.has(1)); // false

console.log(set.size); // 1
console.log(set); // Set { 2 }
console.log(set.values()); // Set Iterator { 2 }
console.log(set.keys()); // Set Iterator { 2 }
console.log(set.entries()); // Set Iterator { 2 }
console.log(set.clear()); // undefined
console.log(set); // Set {}
console.log(set.size); // 0
console.log(set.has(1)); // false
console.log(set.has(2)); // false
console.log(set.add(1)); // Set { 1 }
console.log(set.add(1)); // Set { 1 }
console.log(set.add(2)); // Set { 1, 2 }
console.log(set.size); // 2
console.log(set); // Set { 1, 2 }
console.log(set.delete(1)); // true
console.log(set.size); // 1
console.log(set); // Set { 2 }
console.log(set.clear()); // undefined
console.log(set); // Set {}
console.log(set.size); // 0
console.log(set.has(1)); // false
console.log(set.has(2)); // false
console.log(set.add(1)); // Set { 1 }
