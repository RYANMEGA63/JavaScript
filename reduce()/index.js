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

// .reduce() = reduce the elements of an array to
//             a single value
//             -function name(accumulator, element)-


const prices = [5, 30, 60, 10, 25, 15, 20, 50, 80];
const total = prices.reduce(sum);

consoleLog(total.toFixed(2) + '$');

function sum(accumolator, element){ // during the first iteration, we'll have the accumolator (previous) = 0 and the element (next) = 5, whatever value is returned becomes the accumulator in the next iteration
    return accumolator + element;
}
//consoleLog(Math.max(...prices));

///

const grades = [75, 50, 90, 25, 80, 65, 95, 0, 100];
function max(pre, next){
    return Math.max(pre, next);
}
function min(pre, next){
    return Math.min(pre, next);
}
let loser = grades.reduce(min)
let winner = grades.reduce(max)
consoleLog(winner)
consoleLog(loser)





// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}