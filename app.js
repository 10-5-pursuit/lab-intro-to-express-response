const express = require('express')
const app = express()
const PORT = 3003;
const officeQuotes = require('./models/magic8Ball');

// Route for the ('/')
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Route for ('/terminator)
app.get('/terminator', (req, res) => {
    res.send("I'll be back");
});

// Route for ('/homersimpson')
app.get('/homersimpson', (req, res) => {
    res.send("D'Oh!");
})

// Route for ('/jackdawson')
app.get('/jackdawson', (req, res) => {
    res.send("I'm king of the world!")
})

//Route for ('rodtidwell')
app.get('/rodtidwell', (req, res) => {
    res.send("Show me the money!")
})

// Route for ('/magic8ball')
app.get('/magic8Ball', (req, res) => {
    const randomIndex = Math.floor(Math.random() * officeQuotes.length);
    const magic8Answer = officeQuotes[randomIndex];
    res.send(`<h1>${magic8Answer}</h1>`);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

module.exports = app