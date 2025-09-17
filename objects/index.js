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

// object = A collection of related propreties and/or methods
//          can represet real words objects (people, product, places)
//          object = {key:value, function()}

const person1 = { //we create an object
    firstname: "Spongebob", //that's the attributes
    laastname: "SquarePants",
    age:30,
    isEmployed:true,
    sayHello: function(){
        consoleLog(this.firstname + ': ' + 'Hi!')
    },
    eat: function(){consoleLog('I am eating a krabby patty')}
}
const person2 = {
    firstname: "Patrick", //that's the attributes
    laastname: "Star",
    age:42,
    isEmployed:false,
    sayHello: function(){
        consoleLog(this.firstname + ': ' + 'Hey...')
    },
    eat: function(){consoleLog('I am eating stars')}
}
//we call the object and the attribute of it
//consoleLog(person.firstname);

/*
for(let i in person1){//consoleLog all the attributes
    //filter only the string and remove the functions
    let str = typeof person1[i] !== "function" ? person1[i] : "";
    consoleLog(str) //display the strings attributes
}
for(let i in person2){//consoleLog all the attributes
    let str = typeof person1[i] !== "function" ? person1[i] : "";
    consoleLog(str)
}
*/

person1.sayHello();
person1.eat();
person2.eat();
person2.sayHello();




// returns errors if found
}catch(error){
    consoleLog(error);
}