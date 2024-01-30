//Task: Use WeakMap and WeakSet to store key-value pairs and unique values, respectively.


// Using WeakMap to store key-value pairs
const weakMap = new WeakMap();

const key1 = { id: 1 };
const key2 = { id: 2 };

weakMap.set(key1, 'Value 1');
weakMap.set(key2, 'Value 2');

console.log(weakMap.get(key1)); // Output: 'Value associated with key1'
console.log(weakMap.get(key2)); // Output: 'Value associated with key2'

// Using WeakSet to store unique values
const weakSet = new WeakSet();

const value1 = { name: 'Gaurav' };
const value2 = { name: 'Shimpi' };

weakSet.add(value1);
weakSet.add(value2);
weakSet.add(value1); // Adding the same value again won't have any effect since WeakSet stores unique values.

console.log(weakSet.has(value1)); // Output: true
console.log(weakSet.has(value2)); // Output: true
console.log(weakSet.has({ name: 'Gaurav' })); // Output: false (different object with the same properties)



//=======================================================================================================


//Use a Set to store a collection of unique values. Use a Map to associate keys with values.
// Using Set to store unique values
const uniqueNumbers = new Set();

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(2); 

console.log(uniqueNumbers.has(2)); 
console.log(uniqueNumbers.has(4)); 

// Using Map to associate keys with values
const fruitColorMap = new Map();

fruitColorMap.set('apple', 'red');
fruitColorMap.set('banana', 'yellow');
fruitColorMap.set('orange', 'orange');

console.log(fruitColorMap.get('banana'));
console.log(fruitColorMap.get('grape')); 

// Iterating over the entries in the Map
console.log('Fruit Colors:');
for (const [fruit, color] of fruitColorMap.entries()) {
  console.log(`${fruit}: ${color}`);
}
