/* Write a for loop for the given output:

 1, 3, 5, 7, 9
 2, 4, 6, 8, 10 */
/*  console.log('Print odd numbers from 1 to 10');
 for (let x = 1; x < 10; x++) {
  if (x % 2) {
   console.log(x);
  }
} */
/*  2. write a for loop that iterates between 0 and 10 and prints all even numbers.

HINT: Read on Module/Remainder operator.  */
 console.log('Print even numbers from 1 to 10');
 for (let x = 1; x < 11; x++) {
  if (x % 2 == 0) {
   console.log(x);
  }
}

/* Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers.  */

 for (let x = 1; x < 20; x++) {
  if(x > 1){
    if(x == 2 || x == 3){
      console.log(x);
     }else if(x % 2 && x % 3){
      console.log(x);
    }
  }
} 





