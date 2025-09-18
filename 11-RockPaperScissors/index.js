
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const ChooseRock = document.getElementById('ChooseRock');
const ChoosePaper = document.getElementById('ChoosePaper');
const ChooseScissors = document.getElementById('ChooseScissors');
const score = document.getElementById('scoreDisplay');
function REaddEventListener(object, insert) {
    object.addEventListener('click', Event => {
        playGame(insert);
    })
}

REaddEventListener(ChooseRock, 'rock');
REaddEventListener(ChoosePaper, 'paper');
REaddEventListener(ChooseScissors, 'scissors');
let SCORE = 0;
function playGame(PlayerChoice) {
    resultDisplay.classList.remove(resultDisplay.classList[0]);
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    if (PlayerChoice === computerChoice) {
        result = 'ITS A TIE!';
    } else {
        switch (PlayerChoice) {
            case 'rock':
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case 'paper':
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case 'scissors':
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    console.log(PlayerChoice + "|" + computerChoice);
    playerDisplay.textContent = `PLAYER: ${PlayerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    switch(result){
        case 'YOU WIN':
            resultDisplay.classList.add('win');
            SCORE++;
            break;
        case "YOU LOSE":
            resultDisplay.classList.add('lose');
            SCORE--;
            break;
        case 'ITS A TIE!':
            resultDisplay.classList.add('tie');
            break;
    }
    scoreDisplay.textContent = "SCORE: " + SCORE;
    resultDisplay.textContent = result;
}