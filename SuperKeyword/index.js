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

// super = keyword is used in classes to call the constructor or
//         access the propreties and methods of a parent (superclass)
//         this = this object
//         super = parent

class Animal{
    constructor(name, age, race){//to not repeat ourselves:
        this.name = name;
        this.race = race;
        this.age = age;
    }
    move(speed){
        consoleLog(`the ${this.name} moves at a speed of ${speed}km/h`)
    }
    display(){
        consoleLog(`-Name: ${this.name} !`);
        consoleLog(`Race: ${this.race} :)`);
        consoleLog(`Age: ${this.age} years old`);
        consoleLog(`Speed: ${this.speed}km/h`);
        this.ability();
        consoleLog('---------------------------')
        
    }
}

class Rabbit extends Animal{
    constructor(name, age, race, runSpeed){ //this is the order of the keywords
        super(name, age, race);
        //this.name = name;
        //this.age = age;
        this.speed = runSpeed;
    }

    ability(){
        consoleLog(`This ${this.name} can run`)
        super.move(this.speed);
    }
    
}

class Fish extends Animal{
    constructor(name, age, race, swimSpeed){
        super(name, age, race);
        //this.name = name;
        //this.age = age;
        this.speed = swimSpeed;
    }
    ability(){
        consoleLog(`This ${this.name} can swim`)
        super.move(this.speed);
    }
}

class Hawk extends Animal{
    constructor(name, age, race, flySpeed){
        super(name, age, race);
        //this.name = name;
        //this.age = age;
        this.speed = flySpeed;
    }
    ability(){
        consoleLog(`This ${this.name} can fly`);
        super.move(this.speed);
    }
}

const rabbit = new Rabbit("Bunny", 1, "noir", 2);
const fish = new Fish("Nemo", 3, "poisson globe", 10);
const hawk = new Hawk("Bird", 7, "zombie", 25);

/*
consoleLog(rabbit.name)
consoleLog(fish.name)
consoleLog(hawk.name)
*/
consoleLog('---------------------------')
rabbit.display()
fish.display()
hawk.display()

// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}