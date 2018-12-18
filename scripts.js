var h1 = document.getElementById("greeting");
var form = document.getElementById("form");

var names = localStorage.getItem('names');
names = names ? JSON.parse(names) : ['Hejpa', 'Dejpa'];

function addName(name) { 

    form.classList.add("hidden");
    h1.classList.add("ascend");

    if (names.includes(name)) {   
        h1.innerHTML = ("Välkommen tillbaka " + name + "!");
    } else {
        names.push(name);
        localStorage.setItem('names', JSON.stringify(names));
        h1.innerHTML = ("Välkommen "  + name + "!");
    }
}

function submitForm() {
  addName(document.getElementById('text').value)
  return false;
}
    
