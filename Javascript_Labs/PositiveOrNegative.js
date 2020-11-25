var x = 5;
if (x>0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

var num = -100;

if (num > 100) {
  console.log("Positive and greater than 100");
} else{
  if(num > 0 && num < 100) {
    console.log("Positive and less than 100");
  }else {
    console.log("Negative and less than 100");
  }
}