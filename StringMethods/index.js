
let username ='Ryan Ait Bessai';
let str = "";
let boolean = "";
while(false){
// get a caracter of the string (index)
    str = username.charAt(0);

// get the index of the first occurence of a caracter
    str = username.indexOf('r');

// get the index of the last occurence of a caracter
    str = username.lastIndexOf('a');

// get the lenght of a string
    str = username.length;

// trim any white space (spaces before and after the caracters)
    str = username.trim();

// make all caracters uppercase
    str = username.toUpperCase();

// make all caracters lowercase
    str = username.toLowerCase(); 

// to repeat a string
    str = username.repeat(2);

// test what caracter does a string starts with, returns a boolean
    boolean = username.startsWith("R");

// test what caracter does a string ends with, returns a boolean
    boolean = username.endsWith("i");

// test if a string includes a caracter, returns a boolean
    boolean = username.includes("z");

// replace all caracters in a string
    str = phonenumber.replaceAll('-', '');

// fills the start of the string untill it gets to a specifique lenght (lenght, "caracter to fill (the start) with")
    str = phonenumber.padStart(15, 'a');

// fills the end of the string untill it gets to a specifique lenght (lenght, "caracter to fill (the end) with")
    str = phonenumber.padEnd(15, 'a');    

}

let phonenumber = '123-456-7890';

str = phonenumber.padEnd(15, 'a');
boolean = username.includes("z");

document.getElementById('result').textContent = `${str}, ${boolean}`;
