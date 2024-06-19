const express = require('express')
const app = express()

const phrases = {
    "terminator": ['I\'ll be back', "Hasta la vista, baby"],
    "Emeril" : "Bam!",
    "Steve McGarrett" : "Book \'em Danno!",
    "Coach Taylor" : "Clear eyes, full hearts, can't Lose",
    "Homer Simpson" :"D'Oh",
    "Bruce Banner" : "Don't make me angry",
    "JJ Evans" : "Dy-no-myte!",
    "Batman" : "To the Batmobile!",
    "Hannibal Smith" : "I love it when a plan comes together",
    "Fraiser" : "I'm listening",
    "Regis" :"Is that your final answer?",
    "Borg" : "Resistance is futile",
    "Fox Mulder" : "The truth is out there",
    "Harry Callahan" : "Go ahead, make my day",
    "Travis Bickle" : "You talkin' to me?",
    "Tony Montana" : "Say hello to my little friend",
    "Zeus" : "Release the Kraken",
    "James Bond" : "the name is Bond, James Bond",
    "Dorothy" : "Toto, I've got a feeling we're not in Kansas anymore",
    "Rod Tidwell" : "Show me the money!",
    "Frankenstein" : "It's alive! It's alive",
    "Jim Lovell" : "Houston, we have a problem",
    "Rocky" : "Yo, Adrian",
    "Gollum" : "My precious",
    "Jack Dawson" : "I'm king of the world!",
}


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
    res.send("This is the home page")
})

app.get('/:character', (request, response) => {
    const character = request.params.character.toLowerCase();

    const characterKey = Object.keys(phrases)
                        .filter(key => key.toLowerCase() === character || key.split(" ").join("").toLowerCase() === character.split("-").join("").toLowerCase());
    
    const phrase = ()=> {
        let result = '';

        if(Array.isArray(phrases[characterKey])){
        phrases[characterKey].forEach((phrase, idx) => {
            
            result += `${phrase} <br>` 
        })
        return result;
       } 

       return phrases[characterKey];
    }

    response.send(phrase())
})

app.get('/', (req, res) => {
    response.status(418).send("Hello, world!")
})

// app.get('/tim-gunn', (req, res) => {
//     res.send("Here\'s looking at you, kid")
// })

// app.get('/Emeril', (req, res) => {
//     res.send("Bam!")
// })

// app.get('/Steve-McGarrett', (req, res) => {
//     res.send("Book 'em Danno!")
// })

// app.get('/Coach-Taylor', (req, res) => {
//     res.send("Clear eyes, full hearts, can't Lose")
// })

// app.get('/Homer-Simpson', (req, res) => {
//     res.send("D'Oh")
// })

// app.get('/Bruce-Banner', (req, res) => {
//     res.send("Don't make me angry")
// })

// app.get('/JJ-Evans', (req, res) => {
//     res.send("Dy-no-myte!")
// })

// app.get('/Batman', (req, res) => {
//     res.send("To the Batmobile!")
// })

// app.get('/Hannibal-Smith', (req, res) => {
//     res.send("I love it when a plan comes together")
// })

// app.get('/Fraiser', (req, res) => {
//     res.send("I'm listening")
// })

// app.get('/Regis', (req, res) => {
//     res.send("Is that your final answer?")
// })

// app.get('/Borg', (req, res) => {
//     res.send("Resistance is futile")
// })

// app.get('/Fox-Mulder', (req, res) => {
//     res.send("The truth is out there")
// })

// app.get('/Harry-Callahan', (req, res) => {
//     res.send("Go ahead, make my day")
// })

// app.get('/Travis-Bickle', (req, res) => {
//     res.send("You talkin' to me?")
// })

// app.get('/Tony-Montana', (req, res) => {
//     res.send("Say hello to my little friend")
// })

// app.get('/Zeus', (req, res) => {
//     res.send("Release the Kraken")
// })

// app.get('/James-Bond', (req, res) => {
//     res.send("the name is Bond, James Bond")
// })

// app.get('/Dorothy', (req, res) => {
//     res.send("Toto, I've got a feeling we're not in Kansas anymore")
// })

// app.get('/Rod-Tidwell', (req, res) => {
//     res.send("Show me the money!")
// })

// app.get('/Frankenstein', (req, res) => {
//     res.send("It's alive! It's alive")
// })

// app.get('/Jim-Lovell', (req, res) => {
//     res.send("Houston, we have a problem")
// })

// app.get('/Rocky', (req, res) => {
//     res.send("Yo, Adrian")
// })

// app.get('/Gollum', (req, res) => {
//     res.send("My precious")
// })

// app.get('/Jack-Dawson', (req, res) => {
//     res.send("I'm king of the world!")
// })



// app.get('/terminator', (req, res) => {
//     res.send("I'll be back")
//     res.send("Hasta la vista baby")
//     //prints only the first message
// })

app.get('/magic8', (req, res) => {
    const index =  Math.floor(Math.random() * magic8Responses.length);
    res.send(`<h1>${magic8Responses[index]}</h1>`);
})


app.listen(3003, () => {
    console.log('Listening for requests on port 3003')
})

module.exports = app;