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
// The Code

// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => <some code>

const hello = (name) => consoleLog(`Hello ${name}`);

let numbers = [1, 2, 3, 4, 5, 6];

const double = (element, index, array) => {
    array[index] = element**2;
}
const display = (element) => consoleLog(element);
numbers.forEach(double); //using forEach() with arrow functions
consoleLog(numbers);     //we display the array
numbers.forEach(display); //we display every element in the array separately
//Note: with 'consoleLog()', writing "array.forEach(display)" is the same as writing "consoleLog(...array)"

const say = (element) => consoleLog(element);
say('me')

// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}