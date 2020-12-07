const container = document.getElementById('container');
const clock = document.getElementById('clock');
const button = document.getElementById('start');
let ticker = document.getElementById("ticker");
let time = document.querySelector('input');
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
button.addEventListener('click', (e) => {
  var id = setInterval(myTimer, 100);
  time = Number(time.value);
  function myTimer() {
    time == minutes ? clearInterval(id) : isMinute();
  }
})
