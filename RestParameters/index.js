try{
let htmlList = [];
    function consoleLog(color, ...strings){
        if(color === ''){
            selfcolor = 'black'
        }else{
            selfcolor = color
        }
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


function openfridge(...foods){
    consoleLog('red', ...foods);
}
function getfood(...foods){
    return foods;
}
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
function getaverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
function combineStr(...strings){
    return strings.join(' ');
}


const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "zombie";

consoleLog('', combineStr('Zombie', 'potato', 'ordone'));





// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}