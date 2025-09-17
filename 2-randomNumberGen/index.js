// random number generator

const randombtn = document.getElementById('randomNumbBtn');
let randomnum;
const min = 1;
const max = 6;

randombtn.onclick = function(){

    randomnum = Math.floor(Math.random(0)*(max + 1 - min)) + min;
    document.getElementById('count1').textContent = randomnum;

    randomnum = Math.floor(Math.random(0)*(max - min)) + min;
    document.getElementById('count2').textContent = randomnum;

    randomnum = Math.floor(Math.random(0)*(max - min)) + min;
    document.getElementById('count3').textContent = randomnum;
}
