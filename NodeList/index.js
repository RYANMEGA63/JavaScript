import {consoleLog, consoleError, DisplayObject} from './Module.js';

// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList wont update to automatically reflect changes

// select elements with class
let buttons = document.querySelectorAll('.MyButtons');


// ADD HTML/CSS PROPRETIES

// MOUSEOVER + MOUSEOUT vent listener
buttons.forEach(button => {
    button.addEventListener('mouseover', (EVENT) => {
        EVENT.target.style.backgroundColor = 'rgba(65, 161, 185, 1)'  ;
    })

    button.addEventListener('mouseout', (EVENT) => {
        EVENT.target.style.backgroundColor = 'rgb(53, 189, 223)'  ;
    })
    button.textContent +=' 🤍';
})

// CLICK event listener
/*
buttons.forEach(button => {
    button.addEventListener("click", Event => {
        Event.target.style.color = 'red';
    })
})
*/
// ADD AN ELEMENT

const newButton = document.createElement('button'); // STEP 1
newButton.textContent = "button 5"; // STEP 2
newButton.classList = "MyButtons";

document.body.appendChild(newButton)// STEP 3
// the new button isnt in the nodelist (nodelists are static lists)
let num = 1
buttons = document.querySelectorAll('.MyButtons');
buttons.forEach(button => {
    button.textContent = `Button ${num} 🤍`;
    num++;
})

// REMOVE AN ELEMENT
buttons.forEach(button => {
    button.addEventListener("click", Event => {
        Event.target.remove();
        // to remove the button even in the nodelist
        buttons = document.querySelectorAll('.MyButtons'); 

        // the removed button is not in the nodelist
        console.log(buttons);
    })
})
console.log(buttons);