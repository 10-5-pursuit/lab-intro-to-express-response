const express = require('express')

const app = express()

const PORT = 4001

app.listen(PORT, ()=>{
    console.log('server started')
})


app.get('/', (req,res)=>{
    res.send('This is the home page')
})

//some catch phrases
app.get('/batman', (req,res)=>{
    res.send('To the Batmobile!')
})

app.get('/BruceBanner', (req,res)=>{
    res.send("Don't make me angry")
})

//terminator

app.get('/terminator', (req, res) => {
    res.send('I\ll be back')
    res.send('Hasta la vista, baby')
})

// Magic 8

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

app.get('/magic8', (req,res)=>{
    const idx = Math.floor(Math.random()*19)
    res.send(magic8Responses[idx])
})




module.exports = app