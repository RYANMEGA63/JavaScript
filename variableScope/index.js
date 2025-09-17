try{
const console = document.getElementById('console');
const result = document.getElementById('result');
const WELCOME = document.getElementById('Welcome');
let htmlList = [];
function consoleLog(string, color='black'){
    const html = `<p style="color:${color};">${string}</p>`;
    htmlList += html;
    console.innerHTML = htmlList;
}
//consoleLog('hello world'); how to use consolelog-

let x = 0;

function function1(){
    let x = 1
    consoleLog(x)
}

function function2(){
    let y = 2
    consoleLog(x)
}

function1()
function2()

}catch(error){
    consoleLog(error, 'red')
}