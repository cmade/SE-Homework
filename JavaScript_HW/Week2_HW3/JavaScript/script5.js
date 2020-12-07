const container = document.getElementById('container');
const clock = document.getElementById('clock');
const button = document.getElementById('start');
let ticker = document.getElementById("ticker");
const p = document.querySelector('p');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let span = document.getElementById('span');
var seconds = 0;
var minutes = 0;

p.addEventListener('click', (e) => {
  if(p){
    p.style.display = "none";
    input1.style.display = "inline";
    input2.style.display = "inline";
    span.style.display = "inline"
  }
})
document.addEventListener('keydown', (e) => {
  if(e.keyCode == 13 && input1.value > 0){
    startTime = new Date();
    p.style.display = "flex";
    input1.style.display = "none";
    input2.style.display = "none";
    span.style.display = "none"
    var cancel = setInterval(myTimer, 1000);
  }
function checkTime(i) {
  return i < 10 ? i = "0" + i : i;
}
  function myTimer() {
    var currentTime = new Date();
    var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;
      var minutes = Math.floor(elapsed / 60);
      var seconds = Math.floor(elapsed % 60);
    ticker.innerHTML = checkTime(minutes) + ":" + checkTime(seconds); 
    if (minutes == Number(input1.value) && seconds == Number(input2.value)) {
      ticker.innerHTML = checkTime(minutes) + ":" + checkTime(seconds); 
      clearInterval(cancel);
    }
  }
})
