
const WELCOME = document.getElementById('Welcome');
const submitbtn = document.getElementById('submit');
const INPUT = document.getElementById('guess');
const LASTGUESS = document.getElementById('LastGuess');

//LASTGUESS.style.color = 'red';

let Rnumb = Math.round(Math.random() * 100);
let diff;
WELCOME.textContent = Rnumb;
submitbtn.onclick = function() {
    if(INPUT.value == ""){
        LASTGUESS.textContent = 'Please choose a number';
        LASTGUESS.style.color = 'black';
        WELCOME.style.color = 'rgba(109, 6, 6, 1)';
    }else{
        WELCOME.style.color = 'black';
        guess = Number(INPUT.value);
        LASTGUESS.textContent = guess;
        diff = Math.abs(guess - Rnumb);
        if(diff >= 50){
            LASTGUESS.style.color = 'red';
        }
        else if(diff>= 30){
            LASTGUESS.style.color = 'orange';
        }
        else if(diff>= 10){
            LASTGUESS.style.color = 'yellow';
        }else{
            LASTGUESS.style.color = 'lime';
        }

        if(diff == 0){
            document.getElementById('won').style.display = 'block';
        }
    }

}






















/*
let random;
let result = 1;
let y;
for(let i=0; i < 100000000; i++){
    random = Math.random();
    if(result>random){
        result = random;
    }

    if(random<0.000001){
        y = i;
        break;
    
}
*/

