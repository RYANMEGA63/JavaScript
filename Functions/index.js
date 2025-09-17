const RESULT = document.getElementById('result');
const WELCOME = document.getElementById('Welcome');
const console = document.getElementById('console');
/*
let Listhtml = [];
function happyBirthday(username, age){
    
    const html = `<p>
            happy birthday to ${username} turning ${age}
            </p>
            `;

    Listhtml += html;

    document.getElementById('container').innerHTML = Listhtml;
    console.log('aaa')
}

happyBirthday("RYAN", 16)
happyBirthday("SPONGEBOB", 160)

//document.getElementById('button').onclick = happyBirthday();

let htmlList = [];
function consolLog(string){
    const html =
    `<p>${string}</p>`

    htmlList += html;

    document.getElementById('htmlList').innerHTML = htmlList;
}
    */

let htmlList = [];
function consoleLog(string){
    const html = `<p>${string}</p>`
    htmlList += html;
    console.innerHTML = htmlList;
}

function add(x, y){
    let result = x + y;
    return result;
}
function subtract(x, y){
    let result = x - y;
    return result;
}
function multiply(x, y){
    let result = x * y;
    return result;
}
function divide(x, y){
    let result = x / y;
    return result;
}

function Iseven(number){
    if(number % 2 === 1){
        return false
    }else{
        return true
    }
}

function isValidEmail(email){
    return email.includes('@') ? true : false;
}

/*
consoleLog
    (
     Iseven(
          divide(
                multiply(
                        add(1, 2),
                        subtract(2, 5)
                        )
                ,-9
                )
     )
    );
*/

consoleLog(isValidEmail('Email@.com'))