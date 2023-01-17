module.exports = app => {
  // import Dog Controller
  const dogController = require("../controller/dog.controller");

  //initilize express router
  var route = require("express").Router();

  // Call getRandomDog api
  route.get("/random-dog",dogController.getRandomDog);
  
  // Call getAllBreeds api
  route.get("/allbreeds",dogController.getAllBreeds);
  
  // Call getRandomBreedDog api
  route.get("/random-breed-dog/:name",dogController.getRandomBreedDog);

  route.get("/", function (req, res) {
    res.send("Welcome to Dog API");
  });

  app.use('/dog/api', route);

};
