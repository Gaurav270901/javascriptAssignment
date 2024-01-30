//Task: Use the spread operator to merge two arrays. Use the rest operator in a function to handle variable arguments.


let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10]; 

let arr3 = [...arr1, ...arr2];
console.log(`arr1 is ${arr1}`)

console.log(`arr2 is ${arr2}`)	

console.log(`arr3 is after merging by spread operator ${arr3}`)




function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Test the function with different numbers of arguments
  console.log(sum(1, 2, 3)); 
  console.log(sum(5, 10, 15, 20)); 
  console.log(sum(2)); 
  console.log(sum()); 
  



