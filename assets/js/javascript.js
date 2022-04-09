//global variables
var body = document.body;

var today = moment();

var submitBtn = document.getElementById("submitBtn");

//maybe don't need these two variables?
var workoutBtn = document.getElementById("workoutBtn");
var beerBtn = document.getElementById("beerBtn");

// Simona function
var workoutSpace = document.getElementById("workout-container");

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

var bodyPartDropdown = document.getElementById("workoutDropdown");
for (let i = 0; i < bodyParts.length; i++) {
  var optionChoice = document.createElement("option");
  optionChoice.value = bodyParts[i];
  optionChoice.textContent = bodyParts[i];
  bodyPartDropdown.appendChild(optionChoice);
}

bodyPartDropdown.addEventListener("click", function (event) {
  event.stopPropagation();
  event.preventDefault();
  var optionValue =
    bodyPartDropdown.options[bodyPartDropdown.selectedIndex].value;

  if (optionValue == "Choose Target Body Part") {
  } else {
    //    const options = {
    //      method: 'GET',
    //      headers: {
    //        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    //        'X-RapidAPI-Key': 'd4226dfadcmsh12369317a72c986p116810jsnca27ca1b9942'
    //      }
    //    };

    //    fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + optionValue, options)
    //      .then(response => response.json())
    //      .then(response => console.log(response))
    //      .catch(err => console.error(err));

    var numberDropdown = document.createElement("select");
    var defaultOption = document.createElement("option");
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.textContent = "How many exercises do you want?";
    workoutSpace.appendChild(numberDropdown);
    numberDropdown.appendChild(defaultOption);

    for (let i = 0; i < 21; i++) {
      var numberOption = document.createElement("option");
      numberOption.value = (i + 4).toString();
      numberOption.textContent = (i + 4).toString();
      numberDropdown.appendChild(numberOption);
    }
  }
});

//Xavier function
//Beer API work

//function beer()
//{
//  var Zipcode = document.getElementById("zipCode");
//  var zipcodeInput = Zipcode.value;

//  fetch(
//    "https://api.openbrewerydb.org/breweries?by_postal=" + zipcodeInput,
//    options
//  )
//    .then((response) => response.json())
//    .then((response) => console.log(response))
//    .catch((err) => console.error(err));
//}

//  function submit()
//  {
//    beer();
//  }

//  submitBtn.addEventListener("click", submit);

// workoutBtn.addEventListener("click", workoutApi);
// songBtn.addEventListener("click", beerApi);

//Simona: saving workout to local storage

//Xavier: saving music to local storage

//Elizabeth: pulling music from local storage
var favWorkouts = document.getElementById("favWorkouts");
favWorkouts.appendChild();

//Elizabeth: pulling workout from local storage
var favBrews = document.getElementById("favBrews");
favBrews.appendChild();
