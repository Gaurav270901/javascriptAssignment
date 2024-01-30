//Task: Create a class with a static method. Demonstrate calling the static method without instantiating the class.


class Person {
   constructor(name , age) {
      this.name = name;
      this.age = age;
    }

    getName() {
      return this.name;
    }

    static sayHello() {
      console.log("Hello!");
    }
  }
  
  Person.sayHello(); // Output: "Hello!"