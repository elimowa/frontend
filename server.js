const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(80);
