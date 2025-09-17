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

// constructor = special method for defining the
//               properties and methods for objects

function Car(Tfu, b, c, color){
    this.make = Tfu,
    this.year = c,
    this.model = b,
    this.color = color,
    this.drive = function(){consoleLog(`You drive the ${this.model}`)}
}

const car1 = new Car("1 volsvaken", "golf V", 2009, "BLACK");
const car2 = new Car("2 volsvaken", "4X4", 2009, "RED");
const car3 = new Car("3 Undead", "4 Legs", '-200BC', "green");

consoleLog(car1.make);
consoleLog(car1.model);
consoleLog(car1.year);
consoleLog(car1.color);
consoleLog(car1.drive());

consoleLog(car2.make);
consoleLog(car2.model);
consoleLog(car2.year);
consoleLog(car2.color);
consoleLog(car2.drive());

let Car3Obj = []
for(let i in car3){
    Car3Obj.push(i);
}
for(let i = 0; i < Car3Obj.length - 1; i++){
    consoleLog(car3[Car3Obj[i]]);
}
car3[Car3Obj[Car3Obj.length - 1]]()

// consoleLog(car1.make) or consoleLog(car1['make']) are the same

// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}