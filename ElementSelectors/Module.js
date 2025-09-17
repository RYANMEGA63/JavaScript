
let htmlList = [];
export function consoleLog(...strings) {
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
    let selfcolor = 'black';
    for (let string in strings) {
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


export function DisplayObject(object, style=0) {
    if(style == 1){
        for (let i in object) {
            if (typeof object[i] !== 'function' && typeof object[i] !== 'object') {
                consoleLog(i + ': ' + object[i] + ` |-> (property of -Main Object-)`);
            } else if(typeof object[i] === 'function'){
                consoleLog(i + ': ' + object[i]);
            }else if (typeof object[i] === 'object') {
                consoleLog("-" + i + ': ' + '|-> (object in -Main Object-)');
                for (let o in object[i]) {
                    consoleLog(o + ": " + object[i][o] + ` |-> (property of -${i}-)`);
                }
            }
        }
    }else if(style == 2){
                for (let i in object) {
            if (typeof object[i] !== 'function' && typeof object[i] !== 'object') {
                consoleLog("+" + (i.charAt(0).toUpperCase() + i.slice(1)) + ': ' + object[i]);
            }else if(typeof object[i] === 'function'){
                consoleLog('+' + i + '()');
            } else if (typeof object[i] === 'object') {
                consoleLog("-" + (i.charAt(0).toUpperCase() + i.slice(1))+ ': ');
                for (let o in object[i]) {
                    consoleLog("++" + (o.charAt(0).toUpperCase() + o.slice(1)) + ": " + object[i][o]);
                }
            }
        }
    }else{
                for (let i in object) {
            if (typeof object[i] !== 'function' && typeof object[i] !== 'object') {
                consoleLog((i.charAt(0).toUpperCase() + i.slice(1)) + ': ' + object[i]);
            }else if(typeof object[i] === 'function'){
                consoleLog(i + '()');
            }else if (typeof object[i] === 'object') {
                consoleLog("-" + (i.charAt(0).toUpperCase() + i.slice(1))+ ': ');
                for (let o in object[i]) {
                    consoleLog((o.charAt(0).toUpperCase() + o.slice(1)) + ": " + object[i][o]);
                }
            }
        }
    }
}
export function consoleError(...strings) {
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
    let selfcolor = 'red';
    for (let string in strings) {
        const CONSOLE = document.getElementById('console');
        const html = `<p
style="color:${selfcolor};
font-size:48px">
❌ ${strings[string]}
</p>`;
        htmlList += html;
        CONSOLE.innerHTML = htmlList;
    }
}