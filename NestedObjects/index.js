try {
let htmlList = [];
function consoleLog(...strings) {
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
    for (string in strings) {
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
function DisplayObject(object, style=0) {
    if(style == 1){
        for (let i in object) {
            if (typeof object[i] !== 'function' && typeof object[i] !== 'object') {
                consoleLog((i.charAt(0).toUpperCase() + i.slice(1)) + ': ' + object[i] + ` |-> (property of -Main Object-)`);
            } else if (typeof object[i] === 'object') {
                consoleLog("-" + i + ': ' + '|-> (object in -Main Object-)');
                for (let o in object[i]) {
                    consoleLog((o.charAt(0).toUpperCase() + o.slice(1)) + ": " + object[i][o] + ` |-> (property of -${i}-)`);
                }
            }
        }
    }else{
                for (let i in object) {
            if (typeof object[i] !== 'function' && typeof object[i] !== 'object') {
                consoleLog((i.charAt(0).toUpperCase() + i.slice(1)) + ': ' + object[i]);
            } else if (typeof object[i] === 'object') {
                consoleLog("-" + (i.charAt(0).toUpperCase() + i.slice(1))+ ': ');
                for (let o in object[i]) {
                    consoleLog((o.charAt(0).toUpperCase() + o.slice(1)) + ": " + object[i][o]);
                }
            }
        }
    }
}
function consoleError(...strings) {
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
    selfcolor = 'red';
    for (string in strings) {
        const CONSOLE = document.getElementById('console');
        const html = `<p
style="color:${selfcolor};
font-size:48px">
❌ ${strings[string]}
</p>`;
        htmlList += html;
        CONSOLE.innerHTML = htmlList;
    }
}
// The Code

// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                Person{Address{}, ConstactInfo{}}
//                ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", 'guitar', 'chess', "eating"],
    adress: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    },

    name: function () {
        /*
        consoleLog(`FullName: ${this.fullName}`);
        consoleLog(`Age: ${this.age}`);
        if(this.isStudent==true){
            consoleLog(`He IS a student`);
        }else{
            consoleLog(`He is NOT a student`); 
        }
        consoleLog(`Hobbies: ${this.hobbies}`);
        consoleLog(`-Adress:`);
        //here we gotta specify the "adress "object inside the main object (which is "adress" inside of "person")
        consoleLog(`Street: ${this.adress.street}`);
        consoleLog(`City: ${this.adress.city}`);
        consoleLog(`Country: ${this.adress.country}`);
        */
        for (let i in person) {
            if (typeof person[i] != "function" && typeof person[i] != 'object') {
                consoleLog(`${i.charAt(0).toUpperCase() + i.slice(1)} : ${person[i]}`);
            }
        }
        consoleLog('-Adress:')
        for (let i in person.adress) {
            consoleLog(`${i.charAt(0).toUpperCase() + i.slice(1)} : ${person.adress[i]}`);
        }
    }
}
/*
consoleLog(person.fullName);
consoleLog(person.age);
consoleLog(person.isStudent);
consoleLog(person.hobbies);
consoleLog(person.adress.street); console.log(person.adress);
consoleLog("---------------------------")
*/
//person.name();
//consoleLog("---------------------------");
/*
for (let i in person) {
    if (typeof person[i] != "function" && typeof person[i] != 'object') {
        consoleLog(`${i}: ${person[i]}`);
    }
}
consoleLog('-Adress:')
for (let i in person.adress) {
    consoleLog(`${i}: ${person.adress[i]}`);
}
    */
class Person {

    constructor(name, age, ...adress) {
        this.name = name;
        this.age = age;
        this.adress = new Adress(...adress);
    }
}
class Adress {

    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

let adress = ["124 Conch St.", "Bikini Bottom", "Int. Water"];


let me = new Person("Ryan", "Ait Bessai", ...adress);
let adress1 = ["123 Main St.", "New York", "USA"];
let adress2 = ["456 Elm St.", "London", "UK"];
let adress3 = ["789 Oak Ave.", "Paris", "France"];

let person1 = new Person(
    "Spongebob",
    "Squarepants",
    "123 Main St.", "New York", "USA"   //this is the adress
);

let person2 = new Person(
    "Alice",
    "Smith",
    "456 Elm St.", "London", "UK"   //this is the adress
);

let person3 = new Person(
    "Bob",
    "Johnson",
    "789 Oak Ave.", "Paris", "France"   //this is the adress
);
//display ALL ELEMENTS in an object AND in a nested object
/*
for (let i in me) {
    if (typeof me[i] !== 'function' && typeof me[i] !== 'object') {
        consoleLog((i.charAt(0).toUpperCase() + i.slice(1)) + ': ' + me[i]);
    } else if (typeof me[i] === 'object') {
        consoleLog("-" + (i.charAt(0).toUpperCase() + i.slice(1)) + ': ');
        for (let o in me[i]) {
            consoleLog((o.charAt(0).toUpperCase() + o.slice(1)) + ": " + me[i][o])
        }
    }
}
*/

DisplayObject(person3);






// returns errors if found
} catch (error) {
consoleLog(error, 'red');
}
