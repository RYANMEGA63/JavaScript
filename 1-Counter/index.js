// counter program

const increasebtn = document.getElementById("increase");
const resetbtn = document.getElementById("reset");
const decreasebtn = document.getElementById("decrease");



let currentNumb = 0;

increasebtn.onclick = function(){
    currentNumb += 1;
    document.getElementById('count').textContent = currentNumb;

}

decreasebtn.onclick = function(){
    currentNumb -= 1;
    document.getElementById('count').textContent = currentNumb;

}


resetbtn.onclick = function(){
    currentNumb = 0;
    document.getElementById('count').textContent = 0;

}