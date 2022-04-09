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
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

var bodyPartDropdown = document.getElementById("workoutDropdown");
for (let i = 0; i < bodyParts.length; i++)
{
  var optionChoice = document.createElement("option");
  optionChoice.value = bodyParts[i];
  optionChoice.textContent = bodyParts[i];
  bodyPartDropdown.appendChild(optionChoice);
}


bodyPartDropdown.addEventListener("click", function (event)
{
  event.stopPropagation();
  event.preventDefault();
  var optionValue =
    bodyPartDropdown.options[bodyPartDropdown.selectedIndex].value;
  console.log(optionValue);

  var numberDropdown = document.getElementById("numberDropdown");

  if (optionValue == "Choose Target Body Part")
  {
  } else
  {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'd4226dfadcmsh12369317a72c986p116810jsnca27ca1b9942'
      }
    };

    fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + optionValue, options)
      .then(function (response)
      {
        if (response.ok)
        {
          response.json()
            .then(function (data)
            {
              console.log(data);
              var numberDropdown = document.createElement("select");
              var defaultOption = document.createElement("option");
              defaultOption.selected = true;
              defaultOption.disabled = true;
              defaultOption.textContent = "How many exercises do you want?";
              defaultOption.value = "How many exercises do you want?";
              workoutSpace.appendChild(numberDropdown);
              numberDropdown.appendChild(defaultOption);

              for (let i = 0; i < 17; i++)
              {
                var numberOption = document.createElement("option");
                numberOption.textContent = (i + 4).toString();
                numberOption.value = (i + 4).toString();
                numberDropdown.appendChild(numberOption);
              }
              bodyPartDropdown.disabled = true;

              numberDropdown.addEventListener("click", function (event)
              {

                event.preventDefault();
                event.stopPropagation();

                var exerciseValue = numberDropdown.options[numberDropdown.selectedIndex].value;

                if (exerciseValue == "How many exercises do you want?")
                {
                }
                else
                {
                  var textInput = parseInt(exerciseValue);
                  var workout = [];
                  for (let i = 0; i < textInput; i++)
                  {
                    var randomWorkIndex = Math.floor(data.length * Math.random());
                    var randomWorkout = data[randomWorkIndex];
                    workout.push(randomWorkout);
                    console.log(workout);
                    console.log(exerciseValue);
                  }
                }
              })
            })
        }
      })

  }
})



//Xavier function
//Beer API work
function beer()
{
  var Zipcode = document.getElementById("zipCode");
  var zipcodeInput = Zipcode.value;

  fetch(
    "https://api.openbrewerydb.org/breweries?by_postal=" + zipcodeInput
  ).then(function (response)
  {
    if (response.ok)
    {
      console.log(response);
      response.json().then(function (data) {
        var breweryJSON = JSON.stringify(data);
        // console.log(data);
        // console.log(breweryJSON);
        var allbrewList = [];
        // console.log(allbrewList);
        var getbrewNames = localStorage.getItem("breweryinfo");
        if (null != getbrewNames) {
          allbrewList = getbrewNames.split(",");
        }
        for (i = 0; i < data.length; i++) {
          var breweryName = data[i].name;
          var breweryUrl = data[i].website_url;
          var breweryPhone = data[i].phone;
          var breweryAddress = data[i].street;

          var breweriesinfo = [
            breweryName,
            breweryUrl,
            breweryPhone,
            breweryAddress,
          ];
          allbrewList += breweriesinfo;

          console.log(breweriesinfo);
          // console.log(breweryName);
          // console.log(breweryUrl);
          // console.log(breweryPhone);
          // console.log(breweryAddress);

          //Xavier: saving Brewery to local storage
          // localStorage.setItem("breweryName", breweryName);
          // localStorage.setItem("breweryUrl", breweryUrl);
          // localStorage.setItem("breweryPhone", breweryPhone);
          // localStorage.setItem("breweryAddress", breweryAddress);
          // localStorage.setItem("breweryList", breweryJSON);
          localStorage.setItem("breweryinfo", breweriesinfo.toString());
        }

      });
    }
  });
}

function submit()
{
  beer();
}

//  submitBtn.addEventListener("click", submit);

// workoutBtn.addEventListener("click", workoutApi);
// songBtn.addEventListener("click", beerApi);

//Simona: saving workout to local storage

submitBtn.addEventListener("click", submit);

//Elizabeth: pulling music from local storage
var favWorkouts = document.getElementById("favWorkouts");
// favWorkouts.appendChild();

//Elizabeth: pulling workout from local storage
var favBrews = document.getElementById("favBrews");
// favBrews.appendChild();
