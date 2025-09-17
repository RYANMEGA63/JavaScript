import {consoleLog, consoleError, DisplayObject} from './Module.js';

// Array of objects

const fruits =
[{name: 'apple', color: 'red', calories: 1, vitamines: {vitamineA: 10, vitamineB: 20}},
{name: 'banana', color: 'yellow', calories: 2},
{name: 'coconut', color: 'brown', calories: 3},
{name: 'pineapple', color: 'yellow', calories: 4},
{name: 'orange', color: 'orange', calories: 5},
{name: 'berries', color: 'blue', calories: 6}
]

//select a specifique object/property
//consoleLog(fruits[0].name);

//adds an object to the end of the array
//fruits.push({name:"grapes", color:"purple", calories: 4});

//pops the last object
//fruits.pop()

//fruits.splice(y, x), it starts at the start index (y) and removes x objects starting with the index itself, aka
//fruits.splice(start index, deletCount)
//fruits.splice(0, 1);

/*
fruits.forEach(fruit => consoleLog(fruit))         
fruits.forEach(function(fruit){consoleLog(fruit.name)})  
*/
/*
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);
consoleLog(fruitColors);
*/

/*
const yellowFruits = fruits.filter(fruit => fruit.color == 'yellow');
const lowCalFruits = fruits.filter(fruit => fruit.calories<3)
const HighCalFruits = fruits.filter(fruit => fruit.calories>=3)
yellowFruits.forEach(fruit => consoleLog(fruit.color));
lowCalFruits.forEach(lowCalFruit => consoleLog(lowCalFruit.calories));
consoleError("high cal fruits");
HighCalFruits.forEach(HighCalFruit => consoleLog(HighCalFruit.calories));
*/

const maxFruit = fruits.reduce((max, fruit) =>
    fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((max, fruit) =>
    fruit.calories < max.calories ? fruit : max);

DisplayObject(minFruit, 2);

/*
for(let i in fruits){
    consoleLog("object number " + i + ': ');
    
    //for(let o in fruits[i]){
    //    consoleLog(o + ": " + fruits[i][o]);
    //}
    
    DisplayObject(fruits[i]);
}
*/
