
// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODE LIST



// 1. document.getElementById()         // ELEMENT OR NULL

const heading = document.getElementById('heading')
heading.style.color = 'red';
heading.style.backgroundColor = 'yellow';

// 2. document.getElementsByClassName() // HTML COLLECTION

const fruits = document.getElementsByClassName('fruits');
//fruits.foreach() //it returns a error, HTML collections doesnt have foreach()
fruits[1].style.color = 'red';
/*
for(let fruit of fruits){
    //fruit.style.backgroundColor = 'blue'
    console.log(fruit);
}
    */
console.log(fruits)
Array.from(fruits).forEach(
    fruit => {fruit.style.backgroundColor = 'blue'}
);


// 3. document.getElementsByTagName()   // HTML COLLECTION
const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');
console.log(h4Elements)
h4Elements[0].style.backgroundColor = 'orange';
h4Elements[1].style.backgroundColor = 'red';

for(let h4element of h4Elements){
    h4element.style.color = 'white'
}
Array.from(liElements).forEach(li => {li.style.background = 'aqua'})


// 4. document.querySelector()          // ELEMENT OR NULL
const ClassElement = document.querySelector(".fruits");
const IdElement = document.querySelector("#heading");
const TagElement = document.querySelector("ul");
ClassElement.style.color = 'lime';

// 5. document.querySelectorAll()       // NODE LIST
const ClassElement1 = document.querySelectorAll(".fruits");
const IdElement1 = document.querySelectorAll("#heading");
const TagElement1 = document.querySelectorAll("ul");
IdElement1.forEach(food =>{
    food.style.background = 'violet'
})

ClassElement1[2].style.backgroundColor = "purple";
