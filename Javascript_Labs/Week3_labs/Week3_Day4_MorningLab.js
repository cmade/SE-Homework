// OOP - Inheritance

// Create a class called Fish
// Define a method Swim( )
// Create a class Nemo that inherits from Fish
// Define an attribute color
// Create a Nemo object. Can it swim?
// Find the difference between abstract class and an interface
// Which of the two can have implementation of a method in the class?
//Subclass can implement a method.

class Fish {
  constructor(name) {
    this.name = name;
  }
  swim() {
    return `${this.name} can swim`;
  }
}
class Nemo extends Fish {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

const nemo = new Nemo('nemo', 'green');

console.log(nemo.swim() + ' and is ' + nemo.color);
