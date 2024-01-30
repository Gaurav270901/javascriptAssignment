//Task: Create a class representing a basic entity. Add properties and methods, including a static method.

class Entity {
  constructor(name) {
    this.name = name;
  }

  static create(name) {
    return new Entity(name);
  }
}

const entity = Entity.create('Gaurav');

