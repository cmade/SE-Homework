// Used ES6 Destructuring
var [a, b, c ,d , e, f, g, h, i, j] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var firstAverage = (a + b + c + d + e) / 5;
var secondAverage = (f + g + h + i + j) / 5;
var totalAverage = (firstAverage + secondAverage) / 2;
console.log( "FirstAverage: "+ firstAverage + " " + "SecondAverage: " + secondAverage + " TotalAverage: " + totalAverage);