// Using a while loop, print out all prime numbers between 0 - 20
var x = 0;
while (x < 20) {
  if(x > 1){
    if(x == 2 || x == 3){
      console.log(x);
    }else if (x % 2 && x % 3) {
      console.log(x);
    }
  }
  x++
}
// Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end
var total = 1;
var x = 1;
while (x < 20) {
  x++
  total += x;
}
console.log(total);

// Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.)

var x = 0;
while (x < 20) {
  if (x % 2 == 0 && x > 1) {
    console.log(x);
  }
  x++
}

