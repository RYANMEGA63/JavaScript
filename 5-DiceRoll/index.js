try{

const images = document.getElementById('images');
const input = document.getElementById('input');

let htmlList = [];
    function consoleLog(color, ...strings){
        if(color === ''){
            selfcolor = 'black';
        }else if(color==1){
            htmlList = [];
            selfcolor = 'black';
        }else{
            selfcolor = color;
        }
    for(string in strings){
    const CONSOLE = document.getElementById('console');
    const html = `<p
    style="color:${selfcolor};
    font-size:48px">
    ${strings[string]}
    </p>`;
    htmlList += html;
    CONSOLE.innerHTML = htmlList;
    }
}
// The Code

let dices = ['0', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
function rollDice(){
    let dicesToRoll = input.value;
    let HtmlList = [];
    let DiceRolled = [];


    for(let i=0; i<dicesToRoll; i++){
        let randomDice = Math.floor(Math.random() * 6) + 1;
        consoleLog('', '#' + randomDice);
            while(randomDice == DiceRolled[0] || randomDice == DiceRolled[1] || randomDice == DiceRolled[2] || randomDice == DiceRolled[3] || randomDice == DiceRolled[4] || randomDice == DiceRolled[5]){//test if the rolled dice has already been rolled before
                randomDice = Math.floor(Math.random() * 6) + 1;
                consoleLog('', '-' + randomDice);
            }
        
        DiceRolled.push(randomDice);
        const html = `<img src="${dices[randomDice]}" width="150px">`;
        HtmlList += html;
    }
    images.innerHTML = HtmlList;
    }
    









// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}