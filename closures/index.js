import { consoleLog, consoleError, DisplayObject } from './Module.js';

// closure = a function defined inside of another function
//           the inner function has access to the variables
//           and scopre of the outer function.
//           allow for private variables and state maintenance
//           Used freaquently in JS frameworks: React, Vue, Angular

/**
function outer(){
    let message = "hello"; //privare variable
    function inner(){
        consoleLog(message);
    }
    inner();
}
let message = "goodbye"
outer();
*/

function createCounter() {
    let count = 0;
    function increment() {
        count++;
        consoleLog(`count increased to ${count}`);
    }

    function getCount() { //a function to get the count
        return count
    }
    return { increment, getCount }
}

const counter = createCounter(); //it makes the -counter variable- an object which has the funtions increment() and getCount()

//consoleLog(counter.count) //we cant interact with the count, its private and safe
/*
counter.increment();
counter.increment();
counter.increment();
consoleLog(counter.getCount())
*/

let score = 0;

function CreateGame() {
    function increaseScore(points) {
        score += points;
        consoleLog(`+${points}pts`)
    }

    function decreaseScore(points) {
        score -= points;
        consoleLog(`-${points}pts`)
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}
const Game = CreateGame();
DisplayObject(Game);
Game.increaseScore(23);
Game.decreaseScore(8);
consoleLog(`The final score is: ${Game.getScore()} pts`);