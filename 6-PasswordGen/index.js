try{
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

function GenPassword(PasswordLenght, HaveLowerCase, HaveUpperCase, HaveNumbers, HaveSymbols){
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const UppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbersChars = '0123456789';
    const SymbolsChars = `&~#{([-|_ç^@]°+=$£¤*ù%!§/s)}`;

    let allowedChars = "";
    let password = "";

    allowedChars += HaveLowerCase ? lowercaseChars : "";
    allowedChars += HaveUpperCase ? UppercaseChars : "";
    allowedChars += HaveNumbers ? numbersChars : "";
    allowedChars += HaveSymbols ? SymbolsChars : "";

    if(PasswordLenght <= 0){
        return "password lenght must be at least 1";
    }
    if(allowedChars.length === 0){
        return "at least one set of characters needs to be selected";
    }

    for(let i = 0; i < PasswordLenght; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const PasswordLenght = 12;
const HaveLowerCase = false;
const HaveUpperCase = false;
const HaveNumbers = false;
const HaveSymbols = true;

const password = GenPassword(PasswordLenght, HaveLowerCase, HaveUpperCase, HaveNumbers, HaveSymbols);
consoleLog("", `Generated Password: ` + password)

// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}