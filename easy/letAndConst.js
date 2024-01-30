//Declare a variable using let and another using const. Try reassigning a value to the variable declared with const and observe the result.


let name = "gaurav";
const name2 = "gaurav";


console.log(`Name declare using let keyword ${name}`);

console.log(`Name declare using const keyword ${name2}`);

name = "Gaurav";
//name2 = "Gaurav";

console.log(`changed name declare using let keyword ${name}`);

console.log(`changed name declare using const keyword ${name2}`);

// name2 = "Gaurav";
//       ^
// TypeError: Assignment to constant variable.

//it will show error at line 10 as we cannot change the value of const variable

//=====================================================================================================



//: Declare a variable using let inside a block (enclosed by curly braces). Try accessing the variable outside the block and observe the result. Repeat the same with a variable declared using const. 

function myFun(){
    let firstName = "Gaurav";
    const lastName = "Shimpi";

    console.log(`Value of variable inside the block :  firstName : ${firstName}  lastName : ${lastName}`);
}

myFun(); 
//console.log(`Value of variable outside the block :  firstName : ${firstName}  lastName : ${lastName}`);	
//above line will throw error as let and const are block scope variable 


//=======================================================================================================


//:Declare a variable using let and another using const at the bottom of your code, and then try to access them before their declarations. 

console.log(`Value of variable declared using let keyword : ${var1}	`)

console.log(`Value of variable declared using const keyword : ${var2}`);	

let var1 = "Gaurav";

let var2 = "Gaurav";

// it will show error cannot access variable before initialzation as variable is declared at the time of accessing 


//=======================================================================================================



