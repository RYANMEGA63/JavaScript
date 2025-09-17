// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

const fullname = 'mustapha boudjem3a .III';
let nameLenght = fullname.length;
let FirstSpaceIndx = fullname.indexOf(' ');
let LastSpaceIndx = fullname.lastIndexOf(' ');

let name1 = fullname.slice(0, FirstSpaceIndx)
let name2 = fullname.slice(FirstSpaceIndx, LastSpaceIndx);
let name3 = fullname.slice(LastSpaceIndx, nameLenght);

document.getElementById('finalresult').textContent = `${name1} ${name2} ${name3}`;

const Email = 'test1568AZZAZFZ9a@GMAILLLL.com'

let mail = Email.slice(0, Email.indexOf('@'));
let extension = Email.slice(Email.indexOf('@'))

document.getElementById('result1').textContent = `${name1}, ${mail}`;
document.getElementById('result2').textContent = `${name2} ${extension}`;
document.getElementById('result3').textContent = `${name3} ${mail}${extension}`;


