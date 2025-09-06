try{
let htmlList = [];
    function consoleLog(...strings){
        /*
        if(color === ''){
            selfcolor = 'black';
        }else if(color==1){
            htmlList = [];
            selfcolor = 'black';
        }else{
            selfcolor = color;
        }
        */
       selfcolor = 'black';
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

const WELCOME = document.getElementById('Welcome');

consoleLog('', 'hello world!'); //how to use consolelog()









// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}