const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
const queryRouter = require('./routes/query');
app.use('/',queryRouter);
app.listen(6000);
console.log('Listening on port 6000');