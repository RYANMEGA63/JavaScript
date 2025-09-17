try{
let htmlList = [];
    function consoleLog(...strings){
    for(string in strings){
    const CONSOLE = document.getElementById('console');
    const html = `<p
    style="color:black;
    font-size:25px">
    ${strings[string]}
    </p>`;
    htmlList += html;
    CONSOLE.innerHTML = htmlList;
    }
}
// The Code

// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array 

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
//consoleLog(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

///

const students = ['SPONGEBOB', 'patrick', 'squidward', 'sandy'];
const STUDENTS = students.map(uppercase);
//consoleLog(STUDENTS);
const Fresult = STUDENTS.map(lowercase);
//consoleLog(Fresult);

function uppercase(element){
    return element.toUpperCase();
}

function lowercase(element){
    return element.toLowerCase();
}

///

const dates = ['2025-08-19', '2025-08-13','2025-10-15'];

function formatDatesMap(element){
    const parts = element.split("-"); //in this case, splitting the strings gives an array
    return parts[2] + '-' + parts[1] + '-' + parts[0];
//  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

function formatDatesEach(element, index, array){
    const parts = element.split("-");
    array[index] = parts[2] + '-' + parts[1] + '-' + parts[0];
//  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

const FormattedDatesmap = dates.map(formatDatesMap);
consoleLog(FormattedDatesmap);

function display(string){
    consoleLog(string);
}
dates.forEach(formatDatesMap);
dates.forEach(display)

// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}
