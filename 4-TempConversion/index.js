try{
const console = document.getElementById('console');
const result = document.getElementById('result');
const textbox = document.getElementById('textbox');
const toferen = document.getElementById('toferen');
const tocelsus = document.getElementById('tocelsus');
let htmlList = [];
function consoleLog(string, color='black'){
    const html = `<p style="color:${color};">${string}</p>`;
    htmlList += html;
    console.innerHTML = htmlList;
}
let temp;
function convert(){
    if(toferen.checked){
        temp = Number(textbox.value);
        let Nresult = (temp * (9/5)) + 32;
        result.textContent = Nresult.toFixed(1) + '°F';
    }else if(tocelsus.checked){
        temp = Number(textbox.value);
        let Nresult = (temp - 32) * (5/9);
        result.textContent = Nresult;
    }else{
        result.textContent = "select a unit";
    }
}

}catch(error){
    consoleLog(error, 'red')
}

