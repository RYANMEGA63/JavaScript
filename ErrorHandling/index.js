import { consoleLog, consoleError, DisplayObject } from './Module.js';

// Error = An object that is created to represent a problem
//         that occur
//         Occurs often with user input or establishing a 
//         connection
//     
// try { } = Enclose code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for
//               clean up ex. close files, close connections,
//               release ressources 

/*
try{
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}catch(er){
    consoleError(er);
}finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    consoleLog('This always executes');
    consoleLog('Internet closed');
}*/
try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const devisor = Number(window.prompt("Enter a devisor: "));

    if(devisor == 0){
        throw new Error("you cant devide by 01");
    }
    if(isNaN(devisor) || isNaN(devisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / devisor;

    consoleLog(result);1
} catch (er) {
    consoleError(er);
}

consoleLog('done')

