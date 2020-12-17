// Create an Animal class.
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower
// create three methods for this class - include one method named userSuperPower()
// Create two objects for this class
// Create a class name User
// This class with have firstName, lastName, department attributes
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class
class Animal {
  constructor(name, age, color, legs, superPower) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
  }
  userSuperPower() {
    return `${this.name} can ${this.superPower}`;
  }
  run() {
    return `${this.name} can run`;
  }
  walk() {
    return `${this.name} can walk`;
  }
}
let rabbit = new Animal('Bob', 29, 'green', 2, 'spit fire');
console.log(rabbit.userSuperPower());
let dog = new Animal('Tim', 49, 'blue', 1, 'throw ice');
console.log(dog.userSuperPower());
let cat = new Animal('Cathy', 59, 'orang', 3, 'shoot lasers');
console.log(cat.userSuperPower());

class User {
  constructor(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
  }
  changeDepartment(newDep) {
    this.department = newDep;
    return `${this.firstName} ${this.lastName} is from the ${this.department} departiment`;
  }
}
let user1 = new User('Jeff', 'Zip', 'hr');
console.log(user1.changeDepartment());
let user2 = new User('Lisa', 'Dip', 'accounting');
console.log(user2.changeDepartment());
let user3 = new User('Bart', 'Drop', 'art');
console.log(user3.changeDepartment('Biology'));
