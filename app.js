// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express()
// ROUTES
app.get("/", (request, response) => {
    response.status(418).send("Hello, world!")
})

app.get("/terminator", (request, response) => {
    response.send("I'll be back")
    response.send("Hasta la vista, baby")
})

app.get("/jack-dawson", (request, response) => {
    response.send("I'm king of the world!")
})

app.get("/gollum", (request, response) => {
    response.send("My precious")
})

app.get("/rocky", (request, response) => {
    response.send("Yo, Adrian")
})

app.get("/jim-lovell", (request, response) => {
    response.send("Houston, we have a problem")
})

app.get("/frankenstein", (request, response) => {
    response.send("It's alive! It's alive")
})

app.get("/rod-tidwell", (request, response) => {
    response.send("Show me the money!")
})

app.get("/dorothy", (request, response) => {
    response.send("Toto, I've got a feeling we're not in Kansas anymore")
})

app.get("/james-bond", (request, response) => {
    response.send("the name is Bond, James Bond")
})

app.get("/Zeus", (request, response) => {
    response.send("Release the Kraken")
})

app.get("/magic8", (request, response) => {

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

    const index = Math.floor(Math.random() * magic8Responses.length)

    response.send(`<h1>${magic8Responses[index]}</h1>`)
})

module.exports = app
