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

// inheritance = allows a new class to inherit propreties and methods
//               from an existing class (parent -> child)
//               helps with code reusability

class Animal{
    alive = true;
    static animal_count = 0;

    eat(){
        if(this.alive){
            consoleLog(`this ${this.name} is eating`);
            }else{
            consoleLog(`this ${this.name} is dead (cant eat)`)
            }
        }
    sleep(){
        if(this.alive){
            consoleLog(`this ${this.name} is sleeping`);
            }else{
            consoleLog(`this ${this.name} is dead (cant sleep)`);
            }
        }
    }
class Rabbit extends Animal{
    constructor(){
        super();
        Animal.animal_count += 1;
    }
    name = "rabbit";
    run(){
        consoleLog(`this ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";
    constructor(){
        super();
        Animal.animal_count += 1;
    }
    swim(){
        consoleLog(`this ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";
    constructor(){
        super();
        Animal.animal_count += 1;
    }
    fly(){
        consoleLog(`this ${this.name} is flying`);
    }
}


const rabbit = new Rabbit;
const fish = new Fish;
const hawk = new Hawk;

rabbit.alive = true;
fish.alive = false;
consoleLog(hawk.alive);
consoleLog(hawk.name);
hawk.eat()
hawk.sleep()
consoleLog(Animal.animal_count)
rabbit.run()
fish.swim()
hawk.fly()

// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}