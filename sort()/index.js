import {consoleLog, consoleError, DisplayObject} from './Module.js';

// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, 
//          not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings


let fruits = ["Banana", "Apple", "Mango", "Cherry", "Orange"];
let numbers = [5, 12, 3, 8, 1, 10, 0, 7, 2, 6, 4, 9, 11, 13, 17, 15, 19, 14, 16, 18, 20, 21, 22];
fruits.sort(); //sort them alphabetically (a-z)
numbers.sort(); //it treats the numbers as strings, so it only looks at the first letter of the number (21 will be seen as "21" so it looks at "2")
numbers.sort((a, b) => a - b); //sort them numericlly
//consoleLog(numbers);

let people = [
    {name: "spongebob", age: 30, gpa: 3.0},
    {name: "patrick", age: 32, gpa: 2.5},
    {name: "sandy", age: 29, gpa: 3.9},
    {name: "squidward", age: 35, gpa: 2.8}
    ];

people.sort((a, b) => a.age - b.age); //numerically
people.sort((a, b) => a.name.localeCompare(b.name)); //lexicographicaly
DisplayObject(people); 