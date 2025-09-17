try{
let htmlList = [];
    function consoleLog(string, color='black', fontSize=1){
    const CONSOLE = document.getElementById('console');
    const html = `<p
    style="color:${color};
    font-size:${fontSize*48+'px'}">
    ${string}
    </p>`;
    htmlList += html;
    CONSOLE.innerHTML = htmlList;
}
// The Code

// spread operator = ... allows an iterable such as a,
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)
let numbers = []
for(let i = 1; i < 6; i++){
    numbers.push(i)
}

consoleLog(numbers)
// the spread operator (...) is used to let the math.max() to be used directly on an array
let max = Math.max(...numbers);         
let min = Math.min(...numbers)
consoleLog(min + '-' + max);

let username ="bro code";
let letters = [...username].join('-').replace(' ', '/');
let fruits = ['apple', 'orange', 'banana'];

let vegetables = ['carros', 'cellerie', 'potatos']

let foods = [...fruits, ...vegetables, 'eggs', 'milk'];
consoleLog(foods)
// returns errors if found
}catch(error){
    consoleLog(error, 'red')
}