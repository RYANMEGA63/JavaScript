const display = document.getElementById('display');

document.getElementById('1').addEventListener('click', function () { appendtodisplay(1); });
document.getElementById('2').addEventListener('click', function () { appendtodisplay(2); });
document.getElementById('3').addEventListener('click', function () { appendtodisplay(3); });
document.getElementById('4').addEventListener('click', function () { appendtodisplay(4); });
document.getElementById('5').addEventListener('click', function () { appendtodisplay(5); });
document.getElementById('6').addEventListener('click', function () { appendtodisplay(6); });
document.getElementById('7').addEventListener('click', function () { appendtodisplay(7); });
document.getElementById('8').addEventListener('click', function () { appendtodisplay(8); });
document.getElementById('9').addEventListener('click', function () { appendtodisplay(9); });
document.getElementById('0').addEventListener('click', function () { appendtodisplay(0); });
document.getElementById('.').addEventListener('click', function () { appendtodisplay('.'); });
document.getElementById('remove').addEventListener('click', function () { removeLast(); });
document.getElementById('clear').addEventListener('click', function () { Clear(); });
document.getElementById('plus').addEventListener('click', function () { AddEquations('+'); });
document.getElementById('minus').addEventListener('click', function () { AddEquations('-'); });
document.getElementById('times').addEventListener('click', function () { AddEquations('*'); });
document.getElementById('division').addEventListener('click', function () { AddEquations('/'); });
document.getElementById('equals').addEventListener('click', function () { DisplayResult(); });
let debugRuns = 0;
let displayArray = [0];
let calculations = [];
let total = 0;

display.value = 0;
function addCalc(input) {
    update()
    display.value += input;
    displayArray.push(input);
}
function appendtodisplay(input) {
    update()
    if(calculations.length==1){
        calculations = [];
        displayArray = [0];
        total = 0;
    }
    if (displayArray[0] == 0 && input != "." && displayArray.length == 1) {
        display.value = input;
        displayArray[0] = input;
        logDebug()
        return 0;
    }
    if (displayArray.length == 0 && input == ".") {
        addCalc(0)
    }
    if (input == '.' && displayArray.includes('.') || display.length == 0) {
        logDebug()
        return 0;
    }
    if (displayArray.length < 9) {
        addCalc(input)
    }
    logDebug()
}

function AddEquations(input){
    update()
    if(displayArray.length!=0){calculations.push(displayArray.join(''));}
    calculations.push(input);
    displayArray = [0];
    display.value = 0;
    logDebug()
}
function removeLast() {
    update()
    if(calculations.length==1){
        calculations = [];
        displayArray = [0];
        total = 0;
    }
    if (displayArray.length > 0) {
        displayArray.pop();
        display.value = displayArray.join('')
        if (displayArray.length == 0) {
            addCalc(0);
        }
    }
    logDebug()
}

function Clear() {
    update()
    total = 0;
    displayArray = [0];
    display.value = 0;
    calculations = [];
    logDebug()
}

function DisplayResult(){
    calculations.push(displayArray.join(''));
    logDebug()
    total = eval(calculations.join(''))
    if(total>999999999){
        total = 0;
        displayArray = [0];
        display.value = 0;
        calculations = [];
        display.value = 'Error';
        logDebug()
        return 0;
    }
    calculations = [total];
    display.value = total;
    displayArray = [];
    logDebug()
}

function update(){
    display.value = displayArray.join('');
}
function logDebug(){
    console.log("-------" + debugRuns + "---------------------------")
    console.log("display value: " + display.value);
    console.log("display Array: " + displayArray);
    console.log("calculations: " + calculations);
    console.log("total: " + total);
    debugRuns+=1;
}