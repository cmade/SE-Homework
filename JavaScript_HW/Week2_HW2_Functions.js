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
var maxOfThree = (x, y, z) => {return (x > y && x > z) ? x : ((y > z) ? y : z);};
console.log(`Max of 3 numbers: ${maxOfThree(1, 9, 3)}`);
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isCharacterAVowel(x) {
  if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase() === "u") {
    return true;
  }else{
    return false;
  }
}
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
var sum = 0;
function sumArray(arr) {
  arr.forEach(element => {
    sum += element;
  });
  return sum;
}
console.log(`This is a sum of an array: ${sumArray([1, 2, 3, 4])}`);
var multiple = 1;
function multiplyArray(arr) {
  arr.forEach(element => {
    multiple *= element;
  });
  return multiple;
}
console.log(`This is a multiple of an array: ${multiplyArray([1, 2, 3, 4])}`);
// Write a function that returns the number of arguments passed to the function when called.
function numOfArg(...args) {
  return args.length;
}
console.log(`These are the number of arguments: ${numOfArg(1, 2, 3, 4, 5)}`);
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var newArr = [];
function reverseString(x) {
   x = x.split("")
   x.forEach(element => {
    newArr.unshift(element);
  });
  return newArr.join("");
}
console.log(`These are the number of arguments: ${reverseString("jag testar")}`);
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
var newElement = 0;
function findLongestWord(...word) {
  word.forEach(element => {
    for (let index = 0; index < element.length; index++) {
      if(element[index].length > newElement){
        newElement = element[index].length
      }
    }
  });
  return newElement;
}
console.log(`Find the longest word: ${findLongestWord(["Hello", "Bob", "Okay", "Toddler"])}`);
// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
var newElement2 = [];
function filterLongWords(arr, i) {
    arr.filter((element) => {
      if (element.length > i) {
        newElement2.push(element);
      }
    })
    return newElement2;
}
console.log(`Filter the longest words: ${filterLongWords(["Hello", "Bob", "Okay", "Toddler"], 3)}`);
// Bonus

// 1. Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
var newArr2 = [];
String.prototype.reverseString = function( ) {
    str = String(this)
    str = str.split("")
    str.forEach(element => {
    newArr2.unshift(element);
 });
 return newArr2.join("");
}
console.log(`Call the reverseString method on the word "Per Scholas": ${"Per Scholas".reverseString()}`);
// 2. Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "Per Scholas" will return:

function obj(str) {
  let newObj = {};
  str = str.toLowerCase();
  var strArr = str.split(" ").join("").split("");
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== " ") {
      newObj[str[index]] = 0;
      strArr.forEach(element => {
        if (element.match(str[index])) {
          newObj[str[index]] += 1;
        }
      });
    }
  }
  return newObj; ;
}
console.log(`This is an object: ${JSON.stringify(obj("Per Scholas"))}`);

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
