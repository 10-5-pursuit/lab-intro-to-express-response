// server.js
// dependencies
const app = require('./app');

// configuration
const PORT = 3003;

// listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
