import {consoleLog, consoleError, DisplayObject} from './Module.js';

// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (miliseconds)
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)

//                setTimeout(callback, delay);
//                clearTimeout(timeoutID) = can cancel a timeout before it triggers

/*
function callback(){
    consoleLog('HI1');
}
let ms = 3000;
setTimeout(callback, ms);
setTimeout(function(){consoleLog("HI2")}, ms/2);
setTimeout(() => {consoleLog('HI3')}, ms/3);
*/
/*
function callback(){
    consoleLog('HI1');
}
let ms = 3000;
setTimeout(callback, ms);

const timeoutID = setTimeout(() => {
    consoleLog('timeout')
}, 1);

clearTimeout(timeoutID);
*/
document.getElementById('Start').addEventListener("click", StartTimer);
document.getElementById('Clear').addEventListener("click", ClearTimeout);
let timeoutID;
function StartTimer(){
    function callback(){
        consoleLog('done');
    }
    consoleLog('Started');
    timeoutID = setTimeout(callback, 1000);
}

function ClearTimeout(){
    clearTimeout(timeoutID)
    consoleLog('Cleared')
}