const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port`);
});