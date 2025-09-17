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

const passwordInput = document.getElementById('Password');


function CrackPassword(){
    let Password = passwordInput.value;
    console.time(Password);
    let Chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let charsIndex = [1, 0]
    let controlLen = [0]
    // charsIndex[0]
    let Try = 0;
    while(Password.length >= charsIndex[0]){ //security if password not found
        let guess = '';
        
        for(let i = 1; i < charsIndex[0] + 1; i++){
            guess += Chars[charsIndex[i]];
        }
        Try += 1;
        //console.log(guess);
        
        if(guess === Password){
            console.timeEnd(Password);
            return consoleLog(Try + ': ' + guess);
        }
        charsIndex[1] += 1;
        if(charsIndex.length <= charsIndex[0] + 1){
            charsIndex.push(-1);
            //console.log(charsIndex);
        }
        if(controlLen.length <= charsIndex[0] - 1){
            controlLen.push(0);
            //console.log(controlLen);
        }
        for(let i = 1; i < charsIndex[0] + 1; i++){
            if(charsIndex[i] == Chars.length){
                charsIndex[i] = 0;
                charsIndex[i+1] += 1;
                if(controlLen[i-1] == 0){
                    controlLen[i-1] = 1;
                    //console.log("controllent changed =>"+controlLen[i]);
                }
                charsIndex[0] = controlLen.reduce((prev, next) => prev + next) + 1;
                //console.log('sum added => '+charsIndex[0]);
                }   
        }
    }
    return consoleLog('not found')
}

// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}