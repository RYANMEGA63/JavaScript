import { consoleLog, consoleError, DisplayObject } from './Module.js';

// Callback Hell = Situation in JavaScript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell

function task1(callback) {
    setTimeout(() => {
        consoleLog('task 1 complete');
        callback();
    }, 2000)
}

function task2(callback) {
    setTimeout(() => {
        consoleLog('task 2 complete');
        callback();
    }, 4000)
}

function task3(callback) {
    setTimeout(() => {
        consoleLog('task 3 complete');
        callback();
    }, 3000)
}

function task4(callback) {
    setTimeout(() => {
        consoleLog('task 4 complete');
        callback();
    }, 1500)
}

function task5(callback) {
    setTimeout(() => {
        consoleLog('task 5 complete');
        callback();
    }, 1500)
}

function task6(callback) {
    setTimeout(() => {
        consoleLog('task 6 complete');
        callback();
    }, 1500)
}

function task7(callback) {
    setTimeout(() => {
        consoleLog('task 7 complete');
        callback();
    }, 1500)
}

function task8(callback) {
    setTimeout(() => {
        consoleLog('task 8 complete');
        callback();
    }, 1500)
}
// callback hell
task1( () => {
    task2( () => {
        task3( () => {
            task4( () => {
                task5( () => {
                    task6( () => {
                        task7( () => {
                            task8( () => {
                                consoleLog('All tasks complete');
                            })
                        })
                    })
                })
            })
        })
    })
});
