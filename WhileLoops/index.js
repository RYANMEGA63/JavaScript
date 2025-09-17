const RESULT = document.getElementById('result');
/*
    let username = "";

    while(username === ""){
        username = window.prompt('enter ur name');
    } //standard while loop

    do{
        username = window.prompt('enter ur name');
    }while(username === "") //do the script at least once, then check the condtion for while loop

    RESULT.textContent = `Hello ${username}`;
*/
let loggedIn = false;
let username;
let password;
do{
    username = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(username !== '' && password !== ''){
        loggedIn = true;
        console.log('you are logged in')
    }
    else{
        console.log('Invalid credentials! Please try again')
    }
}while(!loggedIn)