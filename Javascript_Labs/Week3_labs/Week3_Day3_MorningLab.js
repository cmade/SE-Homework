// OOP - Classes: Model a vending machine

// When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack
class VendingMachine {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  vend(x) {
    return `You just bought ${this.name[x]}` + ` for $${this.price[x]}.`;
  }
}

let vendingMachine = new VendingMachine(
  ['Snickers', 'Skittles', 'M&Ms'],
  [2, 1, 3]
);
console.log(vendingMachine.vend(1));
