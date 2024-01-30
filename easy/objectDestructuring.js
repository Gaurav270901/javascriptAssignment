// Task: Create an object and destructure it to extract specific properties into variables.
// Task: Create a nested object and destructure it to extract specific properties into variables.
// Task: Create an array with default value and destructure it to extract specific properties into variables.

// Destructuring Object
const person = {
  name: "Gaurav",
  age: 23,
  address: "Pune",
}

const { name, age, address } = person;

console.log(name); 
console.log(age);
console.log(address);


// Destructuring Nested Object

const student = {
    MyName: "Gaurav",
    MyAge: 23,
    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
}

var { MyName, MyAge, address: { city, state, country } } = student;

console.log(`MyName : ${MyName}
MyAge : ${MyAge}
City : ${city}
State : ${state}`);


//destructuring array elements 

var [position , companyName , location ] =["Junior Software Trainee","Harbinger Group","Pune"];

console.log(`Position : ${position}
CompanyName : ${companyName}
Location : ${location}`);



