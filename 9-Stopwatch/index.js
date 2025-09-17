document.getElementById('startBtn').addEventListener('click', Start);
document.getElementById('stopBtn').addEventListener('click', Stop);
document.getElementById('resetBtn').addEventListener('click', Reset);
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function Start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(Update, 10);
        isRunning = true;
    }
}
function Stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function Reset(){
    clearInterval(timer);
    isRunning = false;
    startTime = Date.now()
    elapsedTime = 0;
    timer = null;
    Update();
}

function Update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = (Math.floor(elapsedTime / (1000 * 60 * 60))).toString().padStart(2, 0);
    let minutes = Math.floor(elapsedTime / (1000*60) % 60).toString().padStart(2, 0);
    let seconds = Math.floor(elapsedTime / (1000) % 60).toString().padStart(2, 0);
    let ms = Math.floor(elapsedTime%1000 / 10).toString().padStart(2, 0);

    document.getElementById('display').textContent =
    `${hours}:${minutes}:${seconds}:${ms}`;
}

