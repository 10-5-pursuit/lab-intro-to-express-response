const express = require('express')
const app = express()
const PORT = 3003

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})