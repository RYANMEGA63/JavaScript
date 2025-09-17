
// DOM Navigation = The provess of navigating through the 
//                  structure of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const parent = document.getElementById('fruits');
const firstChild = parent.firstElementChild;
const lastchild = parent.lastElementChild;
const middleFromNext = firstChild.nextElementSibling;
const middleFromprevious = lastchild.previousElementSibling;
firstChild.style.color = 'white';
lastchild.style.color = 'aqua';
middleFromNext.style.backgroundColor = 'orange';
middleFromprevious.style.color = 'blue';

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement =>{
    const firstchild = ulElement.firstElementChild;
    firstchild.style.backgroundColor = 'blue';
})

ulElements.forEach(ulElement =>{
    const lastchild = ulElement.lastElementChild;
    lastchild.style.backgroundColor = 'red';
})

ulElements.forEach(ulElement =>{
    const Ffirstchild = ulElement.firstElementChild;
    const middleChild = Ffirstchild.nextElementSibling;
    middleChild.style.backgroundColor = 'orange';
})

const Firstul = document.querySelector('ul');
const children = Firstul.children;

Array.from(children).forEach(child => child.style.color='violet')

const Body = document.body;
const lastElemBody = Body.lastElementChild;
Array.from(lastElemBody.children).forEach(cchild =>{
    cchild.style.color = 'aqua';
    console.log('done');
}); 

