const container = document.getElementById('container');
const clock = document.getElementById('clock');
const button = document.getElementById('start');
let ticker = document.getElementById("ticker");
const p = document.querySelector('p');
let input = document.getElementById('input');
var seconds = 0;
var minutes = 0;
function isMinute() {
  if (seconds < 59) {
    seconds++;
    ticker.innerHTML = checkTime(minutes) + ":" + checkTime(seconds);;
  }else{
    seconds = 0;
    minutes++;
    ticker.innerHTML = checkTime(minutes) + ":" + checkTime(seconds);
  }
}
function checkTime(i) {
  return i < 10 ? i = "0" + i : i;
}
p.addEventListener('click', (e) => {
  if(p){
    p.style.display = "none";
    input.style.display = "inline";
  }
})
document.addEventListener('keydown', (e) => {
  if(e.keyCode == 13 && input.value > 0){
    p.style.display = "flex";
    input.style.display = "none";
    var id = setInterval(myTimer, 100);
    input = Number(input.value);
    function myTimer() {
      input == minutes ? clearInterval(id) : isMinute();
    }
  }
})
