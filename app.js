// app.js

// dependencies
const express = require('express');

// config
const app = express();
const PORT = 3003;

// listen
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// export
module.exports = app;

// routes

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.get('/status/:code', (req, res) => {
  const statusCode = req.params.code;
  res
    .status(statusCode)
    .send(`<img src="https://http.cat/${statusCode}" alt="HTTP Cat">`);
});

// other routes

app.get('/tim-gunn', (req, res) => {
  res.send('Make it work');
});

app.get('/terminator', (req, res) => {
  res.send("Send I'll be back." + ' Hasta la vista, baby');
});

const magic8Responses = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes - Definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes, and signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

app.get('/magic8', (req, res) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  const randomResponse = `<h1 style="color:teal">${magic8Responses[randomIndex]}</h1>`;
  res.send(randomResponse);
});

app.get('/Emeril', (req, res) => {
  res.send('Bam!');
});

app.get('/Steve-McGarrett', (req, res) => {
  res.send("Book 'em Danno!");
});

app.get('/Coach-Taylor', (req, res) => {
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get('/Homer-Simpson', (req, res) => {
  res.send("D'Oh");
});

app.get('/Bruce-Banner', (req, res) => {
  res.send("Don't make me angry");
});

app.get('/JJ-Evans', (req, res) => {
  res.send('Dy-no-myte!');
});

app.get('/Batman', (req, res) => {
  res.send('To the Batmobile!');
});

app.get('/Salmon-Smith', (req, res) => {
  res.send('I love it when a plan comes together');
});

app.get('/Fraiser', (req, res) => {
  res.send("I'm listening");
});

app.get('/Regis', (req, res) => {
  res.send('Is that your final answer?');
});

app.get('/Borg', (req, res) => {
  res.send('Resistance is futile');
});

app.get('/Fox-Mulder', (req, res) => {
  res.send('The truth is out there');
});

app.get('/Harry-Callahan', (req, res) => {
  res.send('Go ahead, make my day');
});

app.get('/Travis-Bickel', (req, res) => {
  res.send("You talkin' to me?");
});

app.get('/Tony-Montana', (req, res) => {
  res.send('Say hello to my little friend');
});

app.get('/Zeus', (req, res) => {
  res.send('Release the Kraken');
});

app.get('/James-Bond', (req, res) => {
  res.send('the name is Bond, James Bond');
});

app.get('/Dorothy', (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

app.get('/Rod-Tidwell', (req, res) => {
  res.send('Show me the money!');
});

app.get('/Frankenstein', (req, res) => {
  res.send("It's alive! It's alive");
});

app.get('/Jim-Lumpkin', (req, res) => {
  res.send('Houston, we have a problem');
});

app.get('/Rocky', (req, res) => {
  res.send('Yo, Adrian');
});

app.get('/Gollum', (req, res) => {
  res.send('My precious');
});

app.get('/Jack-Dawson', (req, res) => {
  res.send("I'm king of the world!");
});
