/*
puesdo-code
function toggleDarkMode () {
  var toggle = False
  if (button.pressed) {
    var toggle = True; // ??????
  }
  else {
    var toggle = False;
  }

  if (var toggle === True) {
    background-color: #000000;
    color: #FFFFFF
  }
  else {
    pass // Use the pass statement/no else statement
  }
}
  
}


function toggleDarkMode() {
  var main = document.querySelector('main');
  main.classList.toggle('dark-mode');
}

*/


/*
function toggleDarkMode() {
  document.getElementById("everything").style.backgroundColor = "black";
  document.getElementById("everything").style.color = "white";
  document.getElementById("servicsPicture").style.backgroundColor = "white";
}

*/

function toggleDarkMode() {
  var everything = document.getElementById("everything"); // less typing nothing els
  var servicesPicture = document.getElementById("servicesPicture");
  var pickUs = document.getElementById("pickUs");

  if (everything.style.backgroundColor === "black") {
    everything.style.backgroundColor = "white";
    everything.style.color = "black";
    servicesPicture.style.backgroundColor = "black";
    pickUs.style.color = "#333333";
  }

  else {
    everything.style.backgroundColor = "black";
    everything.style.color = "white";
    servicesPicture.style.backgroundColor = "white";
    pickUs.style.color = "white";
  }
}