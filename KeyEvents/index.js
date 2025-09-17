// eventListener = Listen for specific to create interactive 
//                 web pages 
//                 events: keydown, keyup, keypress
//                 keypress isnt compatible with all web users
//                 .addEventListener(event, callback);

document.body.style.fontFamily = 'sans-serif';
document.body.style.fontSize = '1.5em';
document.body.style.margin = 0;
let numberOfObjects = -1;
let objList = [];
const welcome = document.getElementById('Welcome')

class players {
    constructor(id) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.score = 0;
        this.MoveAmount = 10;

        numberOfObjects += 1;
        // create the HTML element
        let div = document.createElement('div');

        // Edit the HTML element
        div.id = id;
        div.style.backgroundColor = 'lightblue';
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.fontSize = '5rem';
        div.style.display = 'flex';
        div.style.position = 'relative';
        div.style.top = `${numberOfObjects * -200}px`;
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.textContent = '❤';
        //add function/actions
        div.addEventListener('click', () => {
            this.score = 0;
            welcome.textContent = `Welcome, Your score is: ${this.score} coins`;
        })

        //append the elemnt
        document.body.append(div);
        objList.push(this);
    }
}

class objects {
    static NumbObjects = 0;
    static List = [];
    constructor(id) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        numberOfObjects += 1;
        // create the HTML element
        let div = document.createElement('div');

        // Edit the HTML element
        div.id = id;
        div.style.backgroundColor = 'red';
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.fontSize = '5rem';
        div.style.display = 'flex';
        div.style.position = 'relative';
        div.style.top = `${numberOfObjects * -200}px`;
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.style.borderRadius = '100px';
        div.textContent = `💰`;

        //add function/actions
        div.addEventListener('click', () => winCoin(player, this));
        //append the elemnt
        document.body.append(div);
        //append the object to the static list
        objects.List.push(this);
        objList.push(this);
        console.log(this)
    }
}
function coinCreator(number) {
    if (number == 0) {
        return
    }
    let name = `coin${number}`;
    new objects(name);
    return coinCreator(number - 1)
}
document.addEventListener('keydown', (event, object) => {
    object = player;
    let objectHTML = document.getElementById(object.id);
    let KEY = event.key.toLowerCase();
    if (KEY == 'z') { object.y -= object.MoveAmount; }
    if (KEY == 's') { object.y += object.MoveAmount; }
    if (KEY == 'd') { object.x += object.MoveAmount; }
    if (KEY == 'q') { object.x -= object.MoveAmount; }
    objectHTML.style.transform = `translate(${player.x}px, ${player.y}px)`;
    FindCoin(player, objects)
});
function SpawnRandom(LIST) {
    let islist = true;
    try {
        LIST.push('FINISH')
        LIST.pop()
    } catch (er) {
        islist = false;
    }
    if (!islist) {
        let transx = Math.floor(Math.random() * 550);
        transx -= transx % 10;
        let transy = Math.floor((Math.random() * 570));
        transy -= transy % 10;
        LIST.x = transx;
        LIST.y = transy;
        update(LIST);
        return;
    }
    for (let object of LIST) {
        console.log(object)
        let transx = Math.floor(Math.random() * 550);
        transx -= transx % 10;
        let transy = Math.floor((Math.random() * 570));
        transy -= transy % 10;
        object.x = transx;
        object.y = transy;
        update(object);
    }
}
function update(object) {
    let id = object.id;
    let html = document.getElementById(id);
    html.style.transform = `translate(${object.x}px, ${object.y}px)`;
}
function FindCoin(playerObj, ObjectClass) {
    const list = ObjectClass.List;
    for (let object of list) {
        if (playerObj.x < object.x + 180 && playerObj.x + 180 > object.x && playerObj.y < object.y + 180 && playerObj.y + 180 > object.y) {
            winCoin(playerObj, object);
        }
    }
}
function winCoin(player, Object) {
    SpawnRandom(Object);
    player.score += 1;
    welcome.textContent = `Welcome, Your score is: ${player.score} coins`;
}
function FindCoinRepeat() {
    setTimeout(() => {
        for(let object of objects.List) {
            if (player.x < object.x + 180 && player.x + 180 > object.x && player.y < object.y + 180 && player.y + 180 > object.y) {
                winCoin(player, object);
            }
        }
        FindCoinRepeat();
    }, 500)
}
const player = new players('myBox');

SpawnRandom(objList);
coinCreator(100)
SpawnRandom(objects.List);
FindCoinRepeat()
/*
------- playing with style colors and background color------

document.addEventListener('keydown', event =>{
    // box.textContent = '💛';
    box.style.backgroundColor = "tomato";
    box.style.color = 'blue';
});

document.addEventListener('keyup', event =>{
    box.style.color = "black";
    box.style.backgroundColor = "lightblue";
    box.textContent = '❤';
});

*/
