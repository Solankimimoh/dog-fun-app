const axios = require("axios");

// Call this method to get random image of dog
exports.getRandomDog = (req, res) => {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.send(500).json({ status: "fail", message: error.message });
    });
};

// Call this method to get all breeds list with sub list
exports.getAllBreeds = (req, res) => {
  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.send(500).json({ status: "fail", message: error.message });
    });
};

// Call this method to get random image from selected breed
exports.getRandomBreedDog = (req, res) => {
  axios
    .get(`https://dog.ceo/api/breed/${req.params.name}/images/random`)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.send(500).json({ status: "fail", message: error.message });
    });
};
