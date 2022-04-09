//global variables
var body = document.body;

var workoutBtn = document.getElementById("workoutBtn");

var beerBtn = document.getElementById("beerBtn");

// Simona function
workoutBtn.textContent = "Choose target body part";
var bodyParts = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

var optionlist = document.createElement("ul");
for (let i = 0; i < bodyParts.length; i++) {
  var listItem = document.createElement("li");
  var listBtn = document.createElement("button");
  listBtn.textContent = bodyParts[i];
  listItem.appendChild(listBtn);
  optionlist.appendChild(listItem);
  listBtn.setAttribute("id", i.toString());
}

body.appendChild(optionlist);
optionlist.hidden = true;

workoutBtn.addEventListener("click", showFunction);

function showFunction(event) {
  event.stopPropagation();
  event.preventDefault();

  if (optionlist.hidden == true) {
    optionlist.hidden = false;
  } else {
    optionlist.hidden = true;
  }
}

function workoutApi() {}

//Xavier function

//Beer API work
function beer() {
  var Zipcode = document.getElementById("zipCode");
  var zipcodeInput = Zipcode.value;

  fetch(
    "https://api.openbrewerydb.org/breweries?by_postal=" + zipcodeInput
  ).then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        var breweryName = data[0].name;
        var breweryUrl = data[0].website_url;
        var breweryPhone = data[0].phone;
        var breweryAddress = data[0].street;

        console.log(breweryName);
        console.log(breweryUrl);
        console.log(breweryPhone);
        console.log(breweryAddress);
        //Xavier: saving Brewery to local storage
        localStorage.setItem("breweryName", breweryName);
        localStorage.setItem("breweryUrl", breweryUrl);
        localStorage.setItem("breweryPhone", breweryPhone);
        localStorage.setItem("breweryAddress", breweryAddress);
        localStorage.setItem("breweryList", data.name);
      });
    }
  });
}

function submit() {
  beer();
}

// workoutBtn.addEventListener("click", workoutApi);
// songBtn.addEventListener("click", beerApi);

//Simona: saving workout to local storage

submitBtn.addEventListener("click", submit);

//Elizabeth: pulling music from local storage

//Elizabeth: pulling workout from local storage
