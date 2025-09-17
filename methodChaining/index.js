// method chaining = calling one method after another
//                   in one continuous line of code.

// ----- NO METHOD CHAINING -----

let Name = window.prompt('Enter your username: ')

let username = Name.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars

// ----- METHOD CHAINING -----
/*
    let MFirstLetter = Name.trim().charAt(0).toUpperCase();
    let MlowercaseBody = Name.trim().slice(1).toLowerCase();
    let MusernameF = MFirstLetter + MlowercaseBody;
*/
let MusernameF = Name.trim().charAt(0).toUpperCase() + Name.trim().slice(1).toLowerCase();


document.getElementById('result').textContent = MusernameF + ' / ' + username;
