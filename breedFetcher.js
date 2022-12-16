const request = require('request');

const breed = process.argv.splice(2).join(' ');
const url = 'https://api.thecatapi.com/v1/breeds/search?name=' + breed;

request(url, (error, response, body) => {
  if (error) {
    return console.log("Request failed. Please try again later!" + error);
  }
  const data = JSON.parse(body);
  if (data.length === 0 || data[0].name.toLowerCase() !== breed.toLowerCase()) {
    return console.log(`Could not find requested breed: ${breed}. Please try again with a different breed.`);
  }
  console.log(data[0].description);
});