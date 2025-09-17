import {consoleLog, consoleError, DisplayObject} from './Module.js';

// synchronous  = Executes line by line consecutively in a sequantial manner
//               Code that waits for an operation to complete

// asynchronous = allows multiple operations to be performed concurrently without waiting
//                doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callback, Promises, Async/Await

// to sync the two functions
function func1(Callback){
    setTimeout(() => {
    consoleLog('Task 1 Async')
    Callback();
}, 3000);
}
function func2(){
    consoleLog("Task 2 Sync");
    consoleLog("Task 3 Sync");
    consoleLog("Task 4 Sync");

}
//func1(func2);

//just something i tired to do
function Sync(function1, function2){
    function1(function2);
}
Sync(func1, func2)

// it runs the code 1 by 1, it waits the the code to be     finished to run the next code, it is synchronous
//consoleLog("Task 2 Sync");
//consoleLog("Task 3 Sync");
//consoleLog("Task 4 Sync");