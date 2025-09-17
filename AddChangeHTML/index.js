// -------------------- EXAMPLE 1 <h1> ----------------------

// ------------ STEP 1 CREATE THE ELEMENT ------------
const new1H1 = document.createElement('h1');
const new2H1 = document.createElement('h1');
const new3H1 = document.createElement('h1')
// ------------ STEP 2 ADD ATTRIBUTES/PROPRETIES ------------
new1H1.textContent = "1- i like pizza !";
new1H1.style.color = "green";
new1H1.style.textAlign = "center";
new1H1.id = "my2H1";

new2H1.textContent = "2- i like pizza !";
new2H1.id = "my1H1";

new3H1.textContent = "~~~~ Middle ~~~~";
new3H1.style.textAlign = 'center';
new3H1.style.color = "gray";
new3H1.id = "Middle"

// ------------ STEP 3 APPEND TO THE DOM ------------

const box2 = document.getElementById('box2');

document.body.prepend(new2H1);  // its the first child
box2.append(new1H1);            // its the last child
//document.body.insertBefore(new3H1, box2);   

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(new3H1, boxes[1]);


function newH1CoolTrick(id = 'my2H1', number = 1) {
    let html = document.getElementById(id);
    if (number === 4) {
        setTimeout(() => {
            document.getElementById(`box${number}`).append(html);
            console.log(`'${id}' appended in 'box${number}'`);
            setTimeout(() => {
                document.body.append(html);
                console.log(`'newH1CoolTrick' done`);
            }, 1000);
            return
        }, 1000);

    } else {
        setTimeout(() => {
            document.getElementById(`box${number}`).append(html);
            console.log(`'${id}' appended in 'box${number}'`)
            return newH1CoolTrick(id, number + 1);
        }, 1000);
    }
}

// ------------ REMOVE HTML ELEMENT ------------
const Rbox2 = boxes[1];
//boxes[1].removeChild(new1H1);
//document.body.removeChild(new2H1);
document.body.removeChild(Rbox2);


// -------------------- EXAMPLE 1 <h1> ----------------------

// ------------ STEP 1 CREATE THE ELEMENT ------------
const newListItem = document.createElement('li');

// ------------ STEP 2 ADD ATTRIBUTES/PROPRETIES ------------
newListItem.textContent = "Coco";
newListItem.style.color = "red";
newListItem.style.textAlign = "center";
newListItem.id = "listItem";
newListItem.style.fontWeight = 'bold';
newListItem.style.backgroundColor = 'lime'
//newListItem.style.fontSize = "2em";

for (let i of document.getElementById('fruits').children) {
    i.style.color = "red";
    i.style.textAlign = "center";
    i.id = "listItem";
    i.style.backgroundColor = 'lime'
}
// ------------ STEP 3 APPEND TO THE DOM ------------

//document.getElementById('fruits').prepend(newListItem);
const lis = document.getElementById('fruits').children;
const fruits = document.getElementById('fruits');
fruits.insertBefore(newListItem, lis[1]); //in the second postion


// ------------ REMOVE HTML ELEMENT ------------
// document.getElementById('fruits').removeChild(newListItem);
// newListItem.remove();