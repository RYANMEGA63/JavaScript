
// eventListener = Listen for specific to create interactive 
//                 web pages 
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const MyBox = document.getElementById('MyBox');
MyBox.style.backgroundColor = 'lightgreen';
const MyButton = document.getElementById('btn');
MyButton.style.color = 'black'
MyButton.style.backgroundColor = 'rgb(226, 226, 226'
function changeColor(event) {
    if (event.target.style.backgroundColor !== 'tomato') {
        event.target.style.backgroundColor = 'tomato';
        event.target.textContent = "Ouch 🤒";
    } else {
        event.target.style.backgroundColor = 'lightgreen';
        event.target.textContent = "Click Me 😄";
    }
}
MyBox.addEventListener('click', changeColor);

MyBox.addEventListener('mouseover', event => {
    if (event.target.style.backgroundColor == 'lightgreen') {
        event.target.style.backgroundColor = 'yellow';
        event.target.textContent = "DONT 😱";
    }
    if (event.target.style.backgroundColor == 'aqua') {
        event.target.style.backgroundColor = 'yellow';
        event.target.textContent = "NOTHING HERE 😱";
    }
}
);
MyBox.addEventListener('mouseout', function (event) {
    if (event.target.style.backgroundColor == 'yellow') {
        event.target.style.backgroundColor = 'lightgreen';
        event.target.textContent = "Click Me 😄";
    }
})

MyButton.addEventListener('click', function (event) {
    if (MyBox.style.backgroundColor == 'tomato'){
        MyBox.style.backgroundColor = 'aqua';
        MyBox.textContent = "Easter Egg 🤪";
    }
    if (event.target.style.color == 'black') {
        event.target.style.color = 'red';
        event.target.style.backgroundColor = 'lime';
    } else {
        event.target.style.color = 'black';
        event.target.style.backgroundColor = 'rgb(226, 226, 226)';
    }
});

MyButton.addEventListener('mouseover', event => {
    if (event.target.style.backgroundColor != "lime") {
        event.target.style.backgroundColor = 'rgb(201, 201, 201)';
    }
});

MyButton.addEventListener('mouseout', event => {
    if (event.target.style.backgroundColor != "lime") {
        event.target.style.backgroundColor = 'rgb(226, 226, 226)';
    }
})