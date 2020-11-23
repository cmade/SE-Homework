const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

const server = app.listen(5000);
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;

document.getElementById('talk').addEventListener('click', () => {
  recognition.start();
})

recognition.addEventListener('result', (e) => {
  let last = e.result.length - 1;
  let text = e.result[last[0].transcript];

  console.log('Confidence: ' + e.result[0][0].confidence);
})

const socket = io();

socket.emit('chat message', text);