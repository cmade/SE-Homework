//These are the variables that we are accessing from the html document
const container = document.getElementById('container');
const clock = document.getElementById('clock');
const button = document.getElementById('start');
let ticker = document.getElementById('ticker');
const p = document.querySelector('p');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let span = document.getElementById('span');
var seconds = 0;
var minutes = 0;

//The listener will temporarily remove the paragraph tag and add the input tag
p.addEventListener('click', (e) => {
  if (p) {
    p.style.display = 'none';
    input1.style.display = 'inline';
    input2.style.display = 'inline';
    span.style.display = 'inline';
  }
});
//This listener will listen for the enter key and display the time.
document.addEventListener('keydown', (e) => {
  if (e.keyCode == 13 && input1.value > 0) {
    startTime = new Date();
    p.style.display = 'flex';
    input1.style.display = 'none';
    input2.style.display = 'none';
    span.style.display = 'none';
    var cancel = setInterval(myTimer, 1000);
  }
  //This function will add the 0 text if the number is less than 10.
  function checkTime(i) {
    return i < 10 ? (i = '0' + i) : i;
  }
  //This function will create the current time and subtract it from the start time to give you the present time. It will also check to see if the time is equal to the input and stop the time when that is true.
  function myTimer() {
    var currentTime = new Date();
    var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;
    var minutes = Math.floor(elapsed / 60);
    var seconds = Math.floor(elapsed % 60);
    ticker.innerHTML = checkTime(minutes) + ':' + checkTime(seconds);
    if (minutes == Number(input1.value) && seconds == Number(input2.value)) {
      ticker.innerHTML = checkTime(minutes) + ':' + checkTime(seconds);
      clearInterval(cancel);
    }
  }
});
