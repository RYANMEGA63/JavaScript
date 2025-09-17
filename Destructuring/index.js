try{
let htmlList = [];
    function consoleLog(...strings){
        /*
        if(color === ''){
            selfcolor = 'black';
        }else if(color==1){
            htmlList = [];
            selfcolor = 'black';
        }else{
            selfcolor = color;
        }
        */
       selfcolor = 'black';
    for(string in strings){
        const CONSOLE = document.getElementById('console');
        const html = `<p
        style="color:${selfcolor};
        font-size:48px">
        ${strings[string]}
        </p>`;
        htmlList += html;
        CONSOLE.innerHTML = htmlList;
        }
    }

    function consoleError(...strings){
        /*
        if(color === ''){
            selfcolor = 'black';
        }else if(color==1){
            htmlList = [];
            selfcolor = 'black';
        }else{
            selfcolor = color;
        }
        */
       selfcolor = 'red';
    for(string in strings){
        const CONSOLE = document.getElementById('console');
        const html = `<p
        style="color:${selfcolor};
        font-size:48px">
        ❌ ${strings[string]}
        </p>`;
        htmlList += html;
        CONSOLE.innerHTML = htmlList;
        }
    }
// The Code

// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way   
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples

// ----------- EXAMPLE 1 -----------
// SWAP THE VALUE OF TWO VARIABLES

let a1 = 1;
let b1 = 2;
// destructuring   creating an array
          [a1, b1] = [b1, a1]; //change swaps the values
//consoleLog(a1, b1);

// ----------- EXAMPLE 2 -----------
// SWAP TWO ELEMENTS

const colors2 = ['red', 'green', 'blue', 'black', 'white'];
//swaps the elements in the same array
[colors2[0], colors2[4]] = [colors2[4], colors2[0]]; 

//consoleLog(colors2)

// ----------- EXAMPLE 3 -----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors3 = ['red', 'green', 'blue', 'black', 'white'];
//assigns the first element of the list (colors3[0]) to -firstColor-, then the second element to -secondColor- ...etc
const[firstColor3, secondColor3, tc3, ...reste3] = colors3;
//const[...test3] = colors3;

//consoleLog(firstColor3);
//consoleLog(secondColor3);
//consoleLog(tc3);
//consoleLog(reste3);
//consoleLog(test3);

// ----------- EXAMPLE 4 -----------
// EXTRACT VALUES FROM OBJECTS

const p4rson1 = {
    firstName: "Spongebob",
    lastName: 'SquarePants',
    age: 30,
    job: "fry cook"
}

const p4rson2 = {
    firstName: "Patrick",
    lastName: 'Star',
    age: 34,
}

//gotta have the same name as the object property
const {firstName, lastName, age, job='unemployed'} = p4rson2;

//consoleLog(firstName);
//consoleLog(lastName);
//consoleLog(age);
//consoleLog(job);



// ----------- EXAMPLE 5 -----------
// EXTRACT VALUES FROM OBJECTS

//we can destructure an object in a function and make it a parameter of the same function
function displayPerson({firstName, lastName, age, job='unemployed'}){
    consoleLog(`Name: ${firstName} ${lastName}`);
    consoleLog(`Age ${age}`)
    consoleLog(`Job: ${job}`)
}

const person1 = {
    firstName: "Spongebob",
    lastName: 'SquarePants',
    age: 30,
    job: "fry cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: 'Star',
    age: 34,
}

displayPerson(person2)


// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}