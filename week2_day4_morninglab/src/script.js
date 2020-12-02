var a = document.getElementById("a");
var b = document.getElementById("b");


function sum(){
  document.getElementById("result").innerHTML = Number(a.value) + Number(b.value);
}

function subtract(){
  document.getElementById("result").innerHTML = Number(a.value) - Number(b.value);
}

function multiply(){
  document.getElementById("result").innerHTML = Number(a.value) * Number(b.value);
}

function divide(){
  document.getElementById("result").innerHTML = Number(a.value) / Number(b.value);
}