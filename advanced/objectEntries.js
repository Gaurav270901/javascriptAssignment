//Task: Use Object.entries() to iterate over the key-value pairs of an object.
// An example object with key-value pairs
const person = {
    name: 'Gaurav Shimpi',
    age: 23,
    city: 'Pune'
  };
  
  // Using Object.entries() to iterate over key-value pairs
  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
  