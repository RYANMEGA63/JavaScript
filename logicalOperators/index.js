const RESULT = document.getElementById('result');

// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//  AND = &&
//  OR  = ||
//  NOT = !


const temp = 0;

/*
    if(temp > 0 && temp <= 30 ){
        RESULT.textContent = 'the weather is GOOD !'
    }
    else{
        RESULT.textContent = 'the weather is BAD !'
    }

    if(temp <= 0 || temp > 30 ){
        RESULT.textContent = 'the weather is BAD !'
    }
    else{
        RESULT.textContent = 'the weather is GOOD !'
    }
*/

const isSunny = false;

if(!isSunny){
    RESULT.textContent = 'it is rainy !'
}
else{
    RESULT.textContent = 'it is sunny !'
}