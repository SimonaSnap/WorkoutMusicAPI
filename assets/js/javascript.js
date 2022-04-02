//global variables
var body = document.body;

//this is where I shall place the url for the exercise API
var exerciseURL;

//elizabeth made this comment

// music API comment

//dropdown button functionality
//<button onclick="myFunction()" class="dropbtn">Dropdown</button>
var dropdownBtn = document.createElement("button");
var dropdownDiv = document.getElementById("dropdown1");
dropdownDiv.appendChild(dropdownBtn);
dropdownBtn.addEventListener("click", myFunction)
dropdownBtn.setAttribute("class", "dropbtn");
dropdownBtn.textContent = "click me";
var hiddendropdowns = document.getElementById("myDropdown");
hiddendropdowns.hidden = true;

function myFunction(event)
{
    var dropdowns = document.getElementById("myDropdown");

    if (dropdowns.hidden = true)
    {
        dropdowns.hidden = false;
    } else
    {
        dropdowns.hidden = true;
    }
}