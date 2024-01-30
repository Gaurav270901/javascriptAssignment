//Task: Create a function that takes two parameters, with one having a default value. Call the function with and without the second argument.

callMyName = (name , surname ="unknown")=>{
    console.log(`Person Details `);
    console.log(`Name : ${name}`);
    console.log(`Surname : ${surname}`);
}

callMyName("Gaurav","Shimpi");
callMyName("Gaurav");
//as we are passing only name to the 2nd calling of the function it will assign surname as an "unknown" value
