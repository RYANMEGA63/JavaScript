
let online = true;
let age;


document.getElementById('submit').onclick = function (){

    age = Number(document.getElementById('input').value);

    if(online){
        if (age < 25) {
            document.getElementById('result').textContent = 'age under 25';
            }
        else if (age > 25) {
            document.getElementById('result').textContent = 'age above 25';
            }
        else if (age == 25) {
            document.getElementById('result').textContent = 'age is 25';
            }
        }
    else{
        document.getElementById('result').textContent = 'you are not online';
    }
}

document.getElementById('Switch').onclick = function(){

    if (online) {
        online = false;
        document.getElementById('Welcome').textContent = 'Not Online';
    }
    else {
        online = true;
        document.getElementById('Welcome').textContent = 'Online';
    }
}
