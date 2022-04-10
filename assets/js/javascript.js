//global variables
var body = document.body;

var today = moment();

var submitBtn = document.getElementById("submitBtn");

// Simona function
var workoutSpace = document.getElementById("workout-container");

var afterGenerate = document.getElementById("workoutDisplay");
var body = document.body

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

afterGenerate.hidden = true;

function getWorkoutStorage()
{
  afterGenerate.hidden = false;

  var inStorageNames = localStorage.getItem("workoutNames");
  var workoutInfo = [];
  if (null != inStorageNames) {
    workoutInfo = inStorageNames.split(",");
  }

  var inStorageEquipment = localStorage.getItem("workoutEquipment");
  var workoutEquip = [];
  if (null != inStorageEquipment) {
    workoutEquip = inStorageEquipment.split(",");
  }
  var inStorageUrls = localStorage.getItem("workoutGif");
  var workoutUrl = [];
  if (null != inStorageUrls) {
    workoutUrl = inStorageUrls.split(",");
  }

  // console.log(workoutInfo)
  // console.log(workoutEquip);
  // console.log(workoutUrl);

  for (let i = 0; i < workoutInfo.length - 1; i++) {
    var names = document.getElementById((i + 10).toString());
    names.textContent = "Exercise name: " + workoutInfo[i];
    var equipment = document.getElementById((i + 50).toString());
    equipment.textContent = "Equipment: " + workoutEquip[i];
    var url = document.getElementById((i + 100).toString());
    url.src = workoutUrl[i];
  }
}

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

  if (optionValue == "Choose Target Body Part") {
  } else {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": "d4226dfadcmsh12369317a72c986p116810jsnca27ca1b9942",
      },
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
              numberDropdown.setAttribute("class", "dropdown");
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
                  var workoutName = "";
                  var workoutEquipment = "";
                  var workoutGif = "";
                  for (let i = 0; i < textInput; i++)
                  {
                    var randomWorkIndex = Math.floor(data.length * Math.random());
                    var randomWorkout = data[randomWorkIndex];
                    workout.push(randomWorkout);
                    //console.log(workout);
                    workoutName += data[i].name + ", ";
                    workoutEquipment += data[i].equipment + ", ";
                    workoutGif += data[i].gifUrl + ", ";
                    console.log(workoutName);
                    console.log(workoutEquipment);
                    console.log(workoutGif);
                    localStorage.setItem("workoutNames", workoutName);
                    localStorage.setItem("workoutEquipment", workoutEquipment);
                    localStorage.setItem("workoutGif", workoutGif);
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
function beer() {
  var Zipcode = document.getElementById("zipCode");
  var zipcodeInput = Zipcode.value;

  fetch(
    "https://api.openbrewerydb.org/breweries?by_postal=" + zipcodeInput
  ).then(function (response) {
    if (response.ok) {
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
          //   var breweryName = data[i].name;
          //   var breweryUrl = data[i].website_url;
          //   var breweryPhone = data[i].phone;
          //   var breweryAddress = data[i].street;

          var brewery = [];
          var breweryName = "";
          var breweryUrl = "";
          var breweryPhone = "";
          var breweryAddress = "";

          if (breweryPhone == null)
          {
            breweryPhone = "Phone number not available";
          }
          if (breweryUrl == null)
          {
            breweryUrl = "Website not available";
          }
          var breweryInfo = [
            breweryName,
            breweryAddress,
            breweryPhone,
            breweryUrl,
          ];
          console.log(breweryName);
          console.log(breweryUrl);
          console.log(breweryPhone);
          console.log(breweryAddress);
          console.log(breweryInfo);
          //Xavier: saving Brewery to local storage
          localStorage.setItem("breweryName", breweryName);
          localStorage.setItem("breweryUrl", breweryUrl);
          localStorage.setItem("breweryPhone", breweryPhone);
          localStorage.setItem("breweryAddress", breweryAddress);
          localStorage.setItem("brewInfo", breweryInfo);
        }
        // localStorage.setItem("breweryList", data[i]);
      });
    }
  });
}

function submit()
{
  getWorkoutStorage();
  beer();
}

submitBtn.addEventListener("click", submit);

//Simona: saving workout to local storage

//Elizabeth: pulling last Workout from local storage
var lastWorkout = document.getElementById("recentWorkouts");
var lastWorkoutDisplay = document.getElementById("showRecentWorkout");
lastWorkoutDisplay.hidden = true;
function getWorkout()
{
  var workoutList = localStorage.getItem();
  if (lastWorkoutDisplay.hidden == false)
  {
    lastWorkoutDisplay.hidden = true;
  } else
  {
    lastWorkoutDisplay.hidden = false;
  }
}
lastWorkout.addEventListener("click", getWorkout);

//Elizabeth: pulling last brewery search from local storage
var lastBrew = document.getElementById("recentBrews");
var lastBrewDisplay = document.getElementById("brewListContent");
lastBrewDisplay.hidden = true;
function getBrewList()
{
  var brewList = localStorage.getItem("brewInfo");
  lastBrewDisplay.textContent = brewList.split(",");

  if (lastBrewDisplay.hidden == false)
  {
    lastBrewDisplay.hidden = true;
  } else
  {
    lastBrewDisplay.hidden = false;
  }
}
lastBrew.addEventListener("click", getBrewList);
