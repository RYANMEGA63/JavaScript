try{
let htmlList = [];
    function consoleLog(color, ...strings){
        if(color === ''){
            selfcolor = 'black';
        }else if(color==1){
            htmlList = [];
            selfcolor = 'black';
        }else{
            selfcolor = color;
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

// callback = a function that is passed as an argument
//            to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            "Hey, wgen you're done, call this next."





function hello(){
    consoleLog('', 'hello!');
}
function goodbye(callback){ //we give a callback argument (which is a function), then we ask him to run that (function) argument when the main function is done
    consoleLog('', 'goodbye!');
    callback();
}


function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    consoleLog('', result);
}

sum(displayConsole, 1, 2)






// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}