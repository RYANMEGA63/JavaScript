// how to accept user input

// 1. Easy WAY = window prompt
/*

let username;
username = window.prompt('whats ur name ?');

document.getElementById('Myp').textContent = username;

*/

// 2. proffesional WAY = HTML textbox

document.getElementById('mysubmit').onclick = function(){
    let username = document.getElementById('Mynuserame').value;
    let mail = document.getElementById('Mymail').value;
    document.getElementById('h1').textContent = `Welcome ${username}`;
    document.getElementById('Myp').textContent = `your email is '${mail}'`;
};
