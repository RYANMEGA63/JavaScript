import {consoleLog, consoleError, DisplayObject} from './Module.js';

// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       web browser constructs the DOM when it loads an HTML document,
//       and structes all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamicall
//       change the content, structure and style of a web page

const WelcomeMsg = document.getElementById('Welcome') 

document.getElementById(''); //to get an element in the documet by its ID

//console.log(document); //to display the document object
document.title = 'me'; //to change propreties of the document, here its the title
console.dir(document); //get all the document propreties

document.body.style.backgroundColor = 'hsla(0, 0%, 15%, 1.00)';
const username = "Ryan Code"
WelcomeMsg.style.color = 'white';
WelcomeMsg.textContent += username === ''? 'guest': username;