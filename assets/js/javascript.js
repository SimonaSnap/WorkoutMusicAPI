//global variables
var body = document.body;

var songBtn = document.getElementById("songBtn");
var workoutBtn = document.getElementById("workoutBtn");
//vanilla javascript work
//Beer API work

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  },
};

fetch("https://api.openbrewerydb.org/breweries?by_postal=98065", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//workout API work
