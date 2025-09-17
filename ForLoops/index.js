const RESULT = document.getElementById('result');
/*
for(let i=10; i > 0; i--){ // the variable (i) is a local variable only accessible in the for loop
    console.log(i);
}

console.log('HAPPY NEW YEAR')

*/

for(let i=1; i<=20; i++){
    if (i == 10){
        continue;
    }
    else{
        console.log(i);
    }
}

