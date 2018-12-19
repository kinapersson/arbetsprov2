var h1 = document.getElementById("greeting");
var form = document.getElementById("form");

//Checking if localstorage has any data and adds default users
var names = localStorage.getItem('names');
names = names ? JSON.parse(names) : ['Hejpa', 'Dejpa'];

function addName(name) { 

    form.classList.add("hidden");
    h1.classList.add("changed");

    if (names.includes(name)) {   
        h1.innerHTML = ("Välkommen tillbaka " + name + "!");
    } else {
        //Adds new user to LS
        names.push(name);
        localStorage.setItem('names', JSON.stringify(names));
        h1.innerHTML = ("Välkommen "  + name + "!");
    }
}

//Gets value from DOM
function submitForm() {
  addName(document.getElementById('text').value)
  return false;
}
    
