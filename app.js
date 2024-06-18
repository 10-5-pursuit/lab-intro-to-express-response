const express = require('express');
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
    "Very doubtful",
  ];

const returnRandomItem = (arr) => {
    const length = arr.length;
    const randomIndex = Math.floor(Math.random() * length);

    return arr[randomIndex];
}


app.get('/', (req,res) => {
    res.status(200).send('Hello user');
});

app.get('/terminator', (req,res) => {
    res.send("I'll be back");
});

// 1
app.get('/timGunn', (req,res) => {
    res.send("Here's looking at you, kid");
});

// 2
app.get('/emeril', (req,res) => {
    res.send('Bam!')
});

// 3
app.get('/steveMcGarrett', (req, res) => {
    res.send("Book'em Danno!")
});

// 4
app.get('/coachTaylor', (req,res) => {
    res.send("Clear eyes, full hearts, can't lose")
});

// 5
app.get('/batman', (req,res) => {
    res.send("To the Batmobile!")
});

// 6
app.get('/regis', (req,res) => {
    res.send("Is that your final answer?")
});

// 7
app.get('/zeus', (req,res) => {
    res.send('Release the kraken')
});

// 8
app.get('/dorothy', (req,res) => {
    res.send("Toto, I've got the feeling we're not in Kansas anymore.")
});

// 9
app.get('/frankenstein', (req,res) => {
    res.send("It's alive! It's alive")
});

app.get('/magic8', (req,res) => {
    res.send(`<h1>${returnRandomItem(magic8Responses)}</h1>`)
})

module.exports = app 