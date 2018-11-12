var express = require("express");
// var path = require("express");
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');
var bodyParser = require('body-parser');

// Sets up the Express App
// =============================================================
var app = express();

app.use(express.static('app/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


var PORT = process.env.PORT || 3000;



app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});