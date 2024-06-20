// DEPENDECIES
const express = require('express')

// CONFIGURATION 
const app = express()
const PORT = 3003

// RESPONSES
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

// ROUTES
app.get('/', (req, res) => {
    res.send(`Hi, Hey, Hello, HRU, we are Happy you're here`)
})

app.get('/tim-gunn', (req, res) => {
    res.send(`Make It Work.`)
})

app.get('/gary-coleman', (req, res) => {
    res.send(`What'chu talkin' bout, Willis?`)
})

app.get('/spock', (req, res) => {
    res.send(`Live long and prosper!`)
})

app.get('/rumi', (req, res) => {
    res.send(`What you seek is seeking you.`)
})

app.get('/spongebob-squarepants', (req, res) => {
    res.send(`I'm ready, I'm ready!`)
})

app.get('/wizards-of-waverly-place', (req, res) => {
    res.send(`Everything is not what it seems.`)
})

app.get('/hermes-trismegistus', (req, res) => {
    res.send(`As above, so below.`)
})

app.get('/terminator', (req, res) => {
    // res.send(`I'll be back`)
    res.send('Hasta la vista, baby')
})

app.get('/magic8', (req, res) => {
    const num = Math.floor(Math.random() * magic8Responses.length)
    res.send(`<h1>${magic8Responses[num]}</h1>`)
})


// LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})