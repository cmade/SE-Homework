/* Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. Write a loop that says how many quarters he got in return. */
var cookie = 4;
var pay = 10;
var quarters = 0;
for(var count = 0; count <  pay - cookie; count++){  
  quarters += 4
}
console.log(quarters);