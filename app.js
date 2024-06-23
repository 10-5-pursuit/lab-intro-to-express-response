const express = require('express');


const app = express();
const PORT =3003;


app.get('/', (req,res) =>{
    res.send('Hello, world!')
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


app.get('/terminator', (req, res) => {
    res.send("I'll be back");
  });


app.get('/terminator1', (req, res) => {
    res.send("Hasta la vista, baby");
  });

app.get('/batman', (req, res) => {
    res.send("To the Batmobile");
  });
  
app.get('/hannibal-smith', (req, res) => {
    res.send("I love it when a plan comes together");
  });
  
  
app.get('/fraser', (req, res) => {
    res.send("I'm listening");
  });


app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })  

  
app.get('/fraser', (req, res) => {
    res.send("I'm listening");
  }); 

  
app.get('/Rocky', (req, res) => {
    res.send("Yo, Adrian");
  });
  
  
   
app.get('/Gollum', (req, res) => {
    res.send("My precious");
  });
  
   
app.get('/Zeus', (req, res) => {
    res.send("Release the Kraken");
  }); 




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
  
  ];
  
app.get('/magic8', (req,res) => {
    const random=Math.floor(Math.random()*magic8Responses.length);
    const response =magic8Responses[random];
    res.send(`<h1>${response}</h1>`)
})  

// // ROUTES
// app.get('/', (request, response) => {
//     response.status(200).send('Hello, world!')
// })


module.exports = app;