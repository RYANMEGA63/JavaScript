
let htmlList = [];
function consoleLog(...strings) {
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
function DisplayObject(object, style=0) {
    if(style == 1){
        for (let i in object) {
            if (typeof object[i] !== 'function' && typeof object[i] !== 'object') {
                consoleLog(i + ': ' + object[i] + ` |-> (property of -Main Object-)`);
            } else if (typeof object[i] === 'object') {
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
            } else if (typeof object[i] === 'object') {
                consoleLog("-" + (i.charAt(0).toUpperCase() + i.slice(1))+ ': ');
                for (let o in object[i]) {
                    consoleLog((o.charAt(0).toUpperCase() + o.slice(1)) + ": " + object[i][o]);
                }
            }
        }
    }
}
function consoleError(...strings) {
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
const cards = [
        'Alice', 'Andrew', 'Angela', 'Anthony', 'Barbara', 'Benjamin', 'Brandon', 'Brian', 'Brittany', 'Cameron',
        'Carol', 'Charles', 'Charlotte', 'Chloe', 'Christopher', 'Daniel', 'David', 'Deborah', 'Dennis', 'Diana',
        'Donna', 'Dorothy', 'Edward', 'Elizabeth', 'Emily', 'Emma', 'Ethan', 'Evelyn', 'Frank', 'Gabriel',
        'George', 'Grace', 'Hannah', 'Heather', 'Henry', 'Isabella', 'Jack', 'Jacob', 'James', 'Jason',
        'Jennifer', 'Jessica', 'John', 'Jonathan', 'Joseph', 'Joshua', 'Julia', 'Justin', 'Karen', 'Katherine',
        'Kevin', 'Kimberly', 'Laura', 'Lauren', 'Linda', 'Lisa', 'Logan', 'Madison', 'Margaret', 'Maria',
        'Mark', 'Mary', 'Matthew', 'Megan', 'Melissa', 'Michael', 'Michelle', 'Nancy', 'Natalie', 'Nathan',
        'Nicholas', 'Nicole', 'Noah', 'Olivia', 'Pamela', 'Patricia', 'Paul', 'Rachel', 'Rebecca', 'Richard',
        'Robert', 'Ryan', 'Samantha', 'Samuel', 'Sandra', 'Sarah', 'Scott', 'Sharon', 'Sophia', 'Stephanie',
        'Steven', 'Susan', 'Thomas', 'Tyler', 'Victoria', 'William', 'Zachary', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];
function MyShuffle(){
    htmlList = [];
    //----------------------------------------------------
    // My way to shuffle (0.01ms-0.03ms to compute)
    console.time("my shuffle");
    let shuffledCards = [];
    let placesTaken = [];
    let index = 0;
    let k = 0;
    let kTaken = 0;
    let yTaken = cards.length;
    index = Math.floor(Math.random() * cards.length);
    for(let i = 0; i < cards.length; i++){
        while(true){
            index = Math.floor(Math.random() * (yTaken - k) + k);
            let isTaken = false;
            for(let o = 0; o < cards.length; o++){
                if(index == placesTaken[o]){
                    isTaken = true;
                    if(kTaken == placesTaken[o]){
                        kTaken += 1;
                        k += 1;
                    }
                    if(yTaken == placesTaken[o]){
                        yTaken -= 1;
                    }
                }
            }
            if(!isTaken){break;}
        }
        placesTaken.push(index);
        shuffledCards[index] = cards[i];
        }
    console.timeEnd("my shuffle");
    consoleLog(shuffledCards);
}
function sortMethod(){
    htmlList = [];
    //----------------------------------------------------
    //sort method
    console.time('sort() method');

    cards.sort(() => Math.random()- 0.5);//its just better

    console.timeEnd('sort() method');
    consoleLog(cards);
}
function fisherYates(){ //the best
    htmlList = [];
    let THEarray = cards;
    //----------------------------------------------------
    // Fisher-Yates algorithm
    console.time('Fisher-Yates method');
    for(let i = THEarray.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [THEarray[i], THEarray[random]] = [THEarray[random], THEarray[i]];
    }
    console.timeEnd('Fisher-Yates method');
    consoleLog(THEarray);
}
