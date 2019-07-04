const request = require('request');
const breedName = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, reponse, body) {
  // console.log('body:', body);
  //console.log(typeof body);
  // const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (error) {
    return console.log('Failed to request details: ', error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
});



