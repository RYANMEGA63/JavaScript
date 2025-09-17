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

// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){consoleLog(`Hi! I am ${this.name}`)},
    eat: function(){
        consoleLog(`${this.name} is eating: ${this.favFood}`)
    }
}

const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    //doesnt work with arrow functions
    sayHello: () => {consoleLog(`Hi! I am ${this.name}`)},
    eat: function(){
        consoleLog(`${this.name} is eating: ${this.favFood}`)
    }
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();


// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}