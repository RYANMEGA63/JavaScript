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

const RESULT = document.getElementById('result');
let fruits = ["banana", "apple", "ninja"]

/*
    consoleLog(fruits);     //print the array
    for(let i = 0; i < fruits.length ; i++){ //go through an array and print it
    consoleLog(fruits[i]);  //print an index
    }
*/

/*
    fruits.push('zombie');               // adds an item to the last of the 
    fruits.unshift('mango');             // adds an item to the beginning of the 
    fruits.pop();                        // pop the last item of the array
    fruits.shift();                      // removes the first item of the array
    let NumberOfFruits = fruits.lenght   // lenght of the array
    let index = fruits.indexOf('apple')  // get index of an item
    consoleLog(fruits);

    for(let i = 0; i < fruits.length; i++){      //go through an array
        let indexu = fruits.indexOf(fruits[i]);  //save the index
        consoleLog(indexu + ': ' + fruits[i]);   // print a list
    }

    for(let i = fruits.length - 1; i >= 0; i--){    //go through an array IN REVERSE
        let indexu = fruits.indexOf(fruits[i]);     //save the index
        consoleLog(indexu + ': ' + fruits[i]);      // print a list
    }

    for(let fruit of fruits){
        consoleLog(fruit)                      // enhanced for loop
    }
*/

fruits.sort()       // sort alphabatical order

for(let fruit of fruits){
        consoleLog(fruit) 
}



// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}
