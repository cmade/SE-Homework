// Write a function that adds three numbers and divides the result by 3 in ES5.


function addThree(x, y, z){
  return x + y + z;
}
console.log("Add 3 variables using ES6: " + addThree(1, 2, 3));

// Now try converting that to Arrow functions.

var add3 = (x, y, z) => {
  return x + y + z;
}
console.log("Add 3 variables using Arrow functions:  " + add3(1, 2, 3));