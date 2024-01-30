//Task: Create a simple class-based and prototype-based inheritance structure, and demonstrate the differences.



// Class-based inheritance
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getInfo() {
      return `Shape (color: ${this.color})`;
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    getInfo() {
      return `Circle (color: ${this.color}, radius: ${this.radius})`;
    }
  }
  
  const myCircle = new Circle('blue', 5);
  console.log(myCircle.getInfo()); // Output: 'Circle (color: blue, radius: 5)'



// Prototype-based inheritance
function Shape(color) {
    this.color = color;
  }
  
  Shape.prototype.getInfo = function() {
    return `Shape (color: ${this.color})`;
  };
  
  function Circle(color, radius) {
    Shape.call(this, color);
    this.radius = radius;
  }
  
  // Inheriting from Shape prototype
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  
  Circle.prototype.getInfo = function() {
    return `Circle (color: ${this.color}, radius: ${this.radius})`;
  };
  
  // Using prototype-based inheritance
  const myCirclePrototype = new Circle('red', 8);
  console.log(myCirclePrototype.getInfo()); // Output: 'Circle (color: red, radius: 8)'
    