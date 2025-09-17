import {consoleLog, consoleError, DisplayObject} from './Module.js';


const WELCOME = document.getElementById('Welcome');
class TEST{
    constructor(name, age, ...adress){
        this.function = function(){consoleLog('hi')}
        this.name = name;
        this.age = age;
        this.adress = new Adress(...adress);
    }
}
class Adress{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
let adress = ["124 Conch St.", "Bikini Bottom", "Int. Water"];
const test = new TEST('bot', 0, ...adress)
consoleLog('hello world!'); //how to use consolelog()
consoleError('works like a charm!'); //how to use consoleError()
DisplayObject(test, 1);
