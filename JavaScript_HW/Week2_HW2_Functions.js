// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(x, y) {
  if(x > y){
    return x;
  }else{
    return y;
  }
}
console.log(`Max of 2 numbers: ${maxOfTwoNumbers(4, 5)}`);
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var maxOfThree = (x, y, z) => {return x, y, z;};
console.log(`Max of 3 numbers: ${maxOfThree(1, 2, 3)}`);
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isCharacterAVowel(x) {
  if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase() === "u") {
    return true;
  }else{
    return false;
  }
}
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
function sumArray(arr) {
  
}
// Write a function that returns the number of arguments passed to the function when called.
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// Bonus

// Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
// Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "Per Scholas" will return:

// {
//   a: 1,
//   c: 1,
//   e: 1,
//   h: 1,
//   l: 1,
//   o: 1,
//   p: 1,
//   r: 1,
//   s: 2,
// }
