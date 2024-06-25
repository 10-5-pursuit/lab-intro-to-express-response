const express = require('express')
const app = express()
const PORT = 3003;

// Route for the ('/')
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Route for ('/terminator)
app.get('/terminator', (req, res) => {
    res.send("I'll be back");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

module.exports = app