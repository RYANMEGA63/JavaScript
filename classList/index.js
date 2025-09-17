import {consoleLog, consoleError, DisplayObject} from './Module.js';

// classList = Element property in JavaScript used to intercat
//             with an element's list of classes (CSS classes)
//             Allow you to make reusable classes for many 
//             elements across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const btn = document.getElementById('MyButton');
const welcome = document.getElementById('Welcome');
btn.classList.add('enabled');
btn.classList.remove('enabled');
/*
btn.addEventListener('mouseover', Event => {
    // add the class .hover
    Event.target.classList.add('hover')
})
btn.addEventListener('mouseout', Event => {
    // remove the class .hover
    Event.target.classList.remove('hover')
})
*/
/*
btn.addEventListener('mouseover', Event => {
    // toggle the class .hover
    Event.target.classList.toggle('hover')
})
btn.addEventListener('mouseout', Event => {
    // toggle the class .hover
    Event.target.classList.toggle('hover')
})
*/

/*
btn.classList.add("enabled")
btn.addEventListener('click', Event => {
    const thing = Event.target;
    if(thing.classList.contains('disabled')){
        thing.classList.replace('disabled', 'enabled');
        thing.textContent = '😁';
        welcome.textContent = "enabled";
        welcome.textContent = thing.classList[0].toUpperCase();
    }
    else{
        thing.classList.replace('enabled', 'disabled');
        thing.textContent = '🤬';
        welcome.textContent = thing.classList[0].toUpperCase();
    }
})

const myH1 = document.querySelector('.MyH1');

myH1.classList.add('enabled');

myH1.addEventListener('click', Event => {
    const thing = Event.target;
    if(thing.classList.contains('disabled')){
        thing.classList.replace('disabled', 'enabled');
        thing.textContent = '😁';
        welcome.textContent = "enabled";
        welcome.textContent = thing.classList[0].toUpperCase();
    }
    else{
        thing.classList.replace('enabled', 'disabled');
        thing.textContent = '🤬';
        welcome.textContent = thing.classList[0].toUpperCase();
    }
})
    */

const MyButtons = document.querySelectorAll('.myButtons');

MyButtons.forEach(button => {
    button.classList.add("enabled");
})

MyButtons.forEach(button => {
    button.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover')
    })
    button.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover')
    })
})

MyButtons.forEach(button => {
    button.addEventListener('click', event => {
        
        if(event.target.classList.contains('disabled')){
            event.target.textContent += "🤬";
        }
        else{
            event.target.classList.replace('enabled', "disabled");
        }
    })
    
})
