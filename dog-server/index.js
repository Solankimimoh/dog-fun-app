const express = require("express");
const app = express();
const cors = require("cors");

//Corsoption which handle only specific domain request
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Bodyparser is deprecated use express.json for parsing request
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Create your endpoints HERE
const ret = require("./app/routes/api.routes")(app);

//Set listen PORT for server
app.listen(8001, function () {
  console.log("App running on port 8001");
});
