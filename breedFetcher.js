const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {

    if (error) {
      error = "Request failed. Please try again later!";
      return callback(error, null);
    }
    
    const data = JSON.parse(body);
    if (data.length === 0) {
      error = `Could not find requested breed: ${breedName}. Please try again with a different breed.`;
      return callback(error, null);
    }

    return callback(error, JSON.parse(body)[0].description);
  });
};

module.exports = { fetchBreedDescription };