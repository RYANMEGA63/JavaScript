//const = a variable that cant be changed
const pi = 3.14159;
let radius;
let circumferance;  

document.getElementById('submit').onclick = function() {
    radius = Number(document.getElementById('input').value);
    circumferance = 2*pi*radius;
    document.getElementById('myH3').textContent = `circumferance: ${circumferance}` + ' cm';
}

