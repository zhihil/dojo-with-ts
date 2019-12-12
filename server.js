const express = require("express");
const app = express();
const port = 8000;

app.use(express.static('static'));

app.listen(port, () => console.log(`Listening in on ${port}`));
