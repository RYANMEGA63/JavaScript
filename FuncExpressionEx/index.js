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

// function declaration = define a reusable block of code
//                        that perfoms a specific task

                                        /*
function hello(){
    consoleLog("hello");
}


// function expressions = a way to define functions as
//                        values or variables

const Vhello = function(){ //we defined a function as a variable, to execute the function, we just have to call the variable with a set of parenthesis '()'
    consoleLog('Hello');
}
//hello();
setTimeout(function(){
    consoleLog('BONJOUR'); //u can pass entire functions
    }, 3000);
                                        */

const numbers = [1, 2, 3, 4, 5, 6]; // we took an array of numbers

const squares = numbers.map( //we created a second array called "squares" where we used the map() function to square every element of the numbers array
    function(element){
        return Math.pow(element, 2);
    });

const cubes = numbers.map(function cube(element){ //using the map function we cubed every element of the numbers array
    return Math.pow(element, 3);
});

let cubesNsquares = []
for(let i = 0; i<cubes.length*2; i+=2){
    cubesNsquares[i] = cubes[i/2];
    cubesNsquares[i + 1] = squares[i/2];
} //then using a for loop (i didnt know how to just add two arrays together) we added the arrays "squares" + "cubes" and created another array called "cubesNsquares", we first added the first element of the first array, then added the first element of the second array, then added the second element of the first array...

let odds = cubesNsquares.filter(function(element){
    return element % 2 === 1;
})// using the filter function, we filtered the numbers and kept only the odd ones

let sum = odds.reduce(function(pre, next){
    return pre + next;
})// we took of sum of all the filtered odd numbers, and we are left we only one number (sum)

consoleLog(sum);


// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}                                 