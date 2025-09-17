try{
let htmlList = [];
    function consoleLog(...strings){
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
// The Code

// forEach() = method used to iterate over the elements
//             of an array and apply a specified function
//             (callback) to each element

//             array.forEach(callback)
//             element, index, array are provided


let array = ["a", "b", "c", "d", "e"]; //we got our array
function display(element){ //we have the function that we will callback
    consoleLog(element);
}
//array.forEach(display);
//we use the funtion on each element of the array individually, we iterate over the elements

let numbers = [1, 2, 3, 4, 5];
function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2)
}

function cube(element, index, array){
    array[index] = element ** 3
}
// numbers.forEach(cube);
// numbers.forEach(display);

let fruits = ['APPLE', 'ORANGE', 'BANANA', 'COCONUT'];
function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}
function Capfirst(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

fruits.forEach(Capfirst);
fruits.forEach(display);
// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}