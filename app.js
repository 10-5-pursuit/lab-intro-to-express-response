const express = require('express')


const app = express();
const PORT = 3003;
const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  
  ]


app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.get('/terminator', (req, res) => {
    res.send('I will be back... Hasta la vista, baby');
})

app.get('/emeril', (req, res) => {
    res.send('Bam!')
})

app.get('/steve-mcGarrett', (req, res) => {
    res.send('Book em Danno!')
})

app.get('/jj-evans', (req, res) => {
    res.send('Dy-no-myte!')
})

app.get('/batman', (req, res) => {
    res.send('To the Batmobile!')
})

app.get('/homer-simpson', (req, res) => {
    res.send('D-Oh')
})

app.get('/dorothy', (req, res) => {
    res.send('Toto, I have a feeling we are not in Kansas anymore!')
})

app.get('/rocky', (req, res) => {
    res.send('Yo, Adrian')
})

app.get('/gollum', (req, res) => {
    res.send('My precious')
})

app.get('/jack-dawson', (req, res) => {
    res.send('I am the king of the world!!!!')
})

app.get('/magic8', (req, res) => {
    let quote = magic8Responses[Math.floor(Math.random()* magic8Responses.length)];
    res.send(`<h1>${quote}</h1>`)
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})