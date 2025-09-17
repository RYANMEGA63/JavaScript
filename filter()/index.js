try{
let htmlList = [];
    function consoleLog(...strings){
    for(string in strings){
    const CONSOLE = document.getElementById('console');
    const html = `<p
    style="color:black;
    font-size:48px">
    ${strings[string]}
    </p>`;
    htmlList += html;
    CONSOLE.innerHTML = htmlList;
    }
}
/*
// The Code

// filter() = creates a new array by filtering out elements

let array = [1, 2, 3, 4, 5, 6, 7];
function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 === 1;
}
let evenNums = array.filter(isEven);
let oddNums = array.filter(isOdd);
//consoleLog(evenNums);
//consoleLog(oddNums);

const ages = [16, 17, 18, 18, 19, 20, 60];

function adult(element){
    return element >= 18;
}
function child(element){
    return element < 18;
}

let adults = ages.filter(adult);
let children = ages.filter(child);
//consoleLog(adults)
//consoleLog(children)
*/

const words = ['apple', 'orange', 'banana', 'kiwi', 'pomegranate', 'coconut'];
const shortWords = words.filter(getShortWords);
function getShortWords(element){
    return element.length <= 6;
}
consoleLog(shortWords);





// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}