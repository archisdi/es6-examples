let url = 'https://swapi.co/api/person/1';

// Doesnt work in nodejs
fetch(url)
.then(res => res.json())
.then(res => console.log(JSON.stringify(res, null, 4)))
.catch(err => console.log(err));
