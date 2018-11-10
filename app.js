var express = require("dotenv");
var path = require("express");

// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {

});