const express = require('express')
const app = express();

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
    res.send("Ello, I'm Albert!")

})

app.get('/harrycallahan', (req,res) => {
    res.send('Go ahead, make my day!')
})

app.get('/tonymontana', ( req, res ) => {
    res.send('Say hello to my little friend')
})

app.get('/zeus', ( req, res ) => {
    res.send('Release the Kraken')
})

app.get('/jimlovell', ( req, res ) => {
    res.send('Houston, we have a problem')
})

app.get('/terminator', ( req, res ) => {
    res.send("I'll be back")
    
})

app.get('/magic8', ( req, res ) => {
    res.send(`<h1>${ magic8Responses[Math.floor(Math.random()* magic8Responses.length)] }</h1>`)

})

app.listen(4444, ()=> {
    console.log('Server is running on Port: 4444!');

})