// DEPENDECIES
const express = require('express')

// CONFIGURATION 
const app = express()
const PORT = 3003

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

// LISTEN
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})