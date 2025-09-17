const RESULT1 = document.getElementById('result1');
const RESULT2 = document.getElementById('result2');

//    = assignment operator
//   == comparaison operator (compare if values are equal)
//  === strict equality operator (compare if values & datatypes are equal)
//   != inequality operator
//  !== strict inequality operator

const pi = 3.14;

if(pi == '3.14'){
    RESULT1.textContent = 'that is pie'
}
else{
    RESULT1.textContent = 'that is not pie'
}

if(pi !== 3.14){
    RESULT2.textContent = 'that is NOT EXACTLY pie'
}
else{
    RESULT2.textContent = 'that is EXACTLY pie'
}