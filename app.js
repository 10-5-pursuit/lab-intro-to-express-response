// const express = require("express");

// const app = express();
// const PORT = 3004;

// app.get("/", (req, res) => {
//   res.status(200).send("hello world!");
// });

// // app.listen(PORT, () => {
// //   console.log(`App is listening on port ${PORT}`);
// // });

// // app.get("/terminator", (req, res) => {
// //   res.send("I'll be back");
// // });

// app.get("/terminator2", (req, res) => {
//   res.send("Hasta la vista, baby");
// });

// app.get("/ralphwiggum1", (req, res) => {
//   res.send(
//     "This Is My Swing Set. This Is My Sandbox, I'm Not Allowed To Go In The Deep End."
//   );
// });

// app.get("/ralphwiggum2", (req, res) => {
//   res.send("I'm A Star Wars.");
// });

// app.get("/ralphwiggum3", (req, res) => {
//   res.send(
//     "And When The Doctor Said I Didn't Have Worms Anymore, That Was The Happiest Day Of My Life."
//   );
// });

// app.get("/ralphwiggum4", (req, res) => {
//   res.send("Me Fail English...That's Unpossible.");
// });

// app.get("/tim-gunn", (req, res) => {
//   res.send("Make It Work.");
// });

// // Thought questions

// // What characters are allowed in a URL?

// // Characters allowed in a URL:
// // URLs have specific rules about what characters are allowed. Generally, URLs can only contain alphanumeric characters and a few special characters under certain conditions. The allowed characters include:

// // Alphanumeric characters: a-z, A-Z, 0-9
// // Reserved characters with special meaning in URLs: !, #, $, &, ', (, ), *, +, ,, -, ., /, :, ;, =, ?, @, [, ], %
// // Unreserved characters: A-Z, a-z, 0-9, -, ., _, ~
// // Other characters are usually percent-encoded (like spaces becoming %20).

// // What happens if you try to create a URL /tim gunn

// // If you try to create a URL with spaces like /tim gunn, the browser or server will automatically encode the space as %20. So, /tim gunn would become /tim%20gunn in the URL.

// // Is there a difference between /timgunn and /TimGunn and /tim/gunn?

// // /timgunn: This represents a single path segment in the URL.
// // /TimGunn: URLs are case-sensitive, so /TimGunn is considered different from /timgunn.
// // /tim/gunn: Here, /tim and /gunn represent different path segments separated by /. This indicates a hierarchical structure.

// // If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's?

// // In URLs, certain characters like ' should be percent-encoded to ensure they don't interfere with the URL structure. The apostrophe ' in "Here's" would be encoded as %27. So, "Here's looking at you, kid" in a URL might look like /Here%27s%20looking%20at%20you,%20kid.

// app.get("/terminator", (req, res) => {
//   res.send("Ill be back");
// });

// app.get("/magic8", (req, res) => {
//   const magic8Responses = [
//     "It is certain",
//     "It is decidedly so",
//     "Without a doubt",
//     "Yes - Definitely",
//     "You may rely on it",
//     "As I see it, yes",
//     "Most likely",
//     "Outlook good",
//     "Yes, and signs point to yes",
//     "Reply hazy, try again",
//     "Ask again later",
//     "Better not tell you now",
//     "Cannot predict now",
//     "Concentrate and ask again",
//     "Don't count on it",
//     "My reply is no",
//     "My sources say no",
//     "Outlook not so good",
//     "Very doubtful",
//   ];
//   const randomIndex = Math.floor(Math.random() * magic8Responses.length);
//   const response = magic8Responses[randomIndex];
//   //   res.send(`<h1 style="color: red">${response}</h1>`);
//   res.send(`<h1 style="color: red; animation: fadeIn 1s ease-out;">${response}</h1>
//           <style>
//             @keyframes fadeIn {
//               0% { opacity: 0; }
//               100% { opacity: 1; }
//             }
//           </style>`);
// });

// if (process.env.NODE_ENV === "test") {
//   app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
//   });
// }

// module.exports = app;

const express = require("express");

const app = express();
const PORT = 3004;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/terminator2", (req, res) => {
  res.send("Hasta la vista, baby");
});

app.get("/ralphwiggum1", (req, res) => {
  res.send(
    "This Is My Swing Set. This Is My Sandbox, I'm Not Allowed To Go In The Deep End."
  );
});

app.get("/ralphwiggum2", (req, res) => {
  res.send("I'm A Star Wars.");
});

app.get("/ralphwiggum3", (req, res) => {
  res.send(
    "And When The Doctor Said I Didn't Have Worms Anymore, That Was The Happiest Day Of My Life."
  );
});

app.get("/ralphwiggum4", (req, res) => {
  res.send("Me Fail English...That's Unpossible.");
});

app.get("/tim-gunn", (req, res) => {
  res.send("Make It Work.");
});

app.get("/magic8", (req, res) => {
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
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  const response = magic8Responses[randomIndex];
  res.send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: black;">
      <div style="text-align: center; color: white; font-family: Arial, sans-serif;">
        <h1 style="color: red; animation: fadeIn 1s ease-out;">${response}</h1>
        <style>
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        </style>
      </div>
    </div>
  `);
});

app.get("/:dynamic", (req, res) => {
  const dynamicContent = req.params.dynamic;
  res.send(`You requested the dynamic route: ${dynamicContent}`);
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
}

module.exports = app;
