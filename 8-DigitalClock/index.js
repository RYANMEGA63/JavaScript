document.getElementById('change').addEventListener('click', change)
let Display = true;
function change(){
    Display = !Display
    updateClock();
}

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12? "pm":"am";
    const meridiemHours = (hours % 12 || 12).toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    if(Display){
    let timeString = hours + ":" + minutes + ":" + seconds
    document.getElementById('clock').textContent = timeString;
    }else{
    let timeString = meridiemHours + ":" + minutes + ":" + seconds + meridiem
    document.getElementById('clock').textContent = timeString;
    }
}
updateClock();
setInterval(updateClock, 1000);
