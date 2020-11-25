// 1. Write a JavaScript display the larger of two integers
function largerInteger(a, b){
  if(a > b){
    return a;
  }else{
    return b;
  }
}
console.log(largerInteger(3, 5));

/* 2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */
var grade = 90;
if (grade >= 90) {
  console.log('A');
} else if(grade >= 80){
  console.log('B');
}else if (grade >= 70) {
  console.log('C');
} else if (grade >= 55){
  console.log('D');
} else {
  console.log('F');
}
/* 3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there" */

var time = "5:59";
if(time.length == 4){
  var time = Number(time.slice(0, 1));
}else{
  var time = Number(time.slice(0, 2));
}


if(time >= 5 && time < 12){
  console.log("Good Morning");
}else if(time >= 12 && time <= 16){
  console.log("Good Afternoon");
}else{
  console.log("Hey there");
}

