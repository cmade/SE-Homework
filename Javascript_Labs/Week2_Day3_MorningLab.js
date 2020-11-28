// Functions

// Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(x, y) {
  if(x > y){
    return x;
  }else{
    return y;
  }
}
console.log(`Max of 2 numbers: ${maxOfTwoNumbers(4, 5)}`);
// Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var maxOfThree = (x, y, z) => {return x, y, z;};
console.log(`Max of 3 numbers: ${maxOfThree(1, 2, 3)}`);
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
function isCharacterAVowel(x) {
  if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase() === "u") {
    return true;
  }else{
    return false;
  }
}
console.log(`Is this a vowel: ${isCharacterAVowel('b')}`);
// Write a function charCount that takes a string and returns the length of the string.
var charCount = (string) => {return string.length};
console.log(`What is the length of the string: ${charCount("Bob")}`);
// Write a function vowelCount that takes a String and returns the number of vowels in the String. add a check for the string to be of 10 or less characteers
var vowels = 0;
function vowelCount(str) {
    for(var i = 0; i <= str.length; i++){
      str = str.toLowerCase();
      if(str.length < 10){
        if(str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u") {
          vowels++;
        }
      }else{
        return "Enter a smaller string.";
      }
    }
    return vowels;
}
console.log(`This is a vowel counter: ${vowelCount("12345678910")}`);
