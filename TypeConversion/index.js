
// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

document.getElementById('submit').onclick = function(){
    let result = document.getElementById('GetAge').value;
    result = Number(result);
    result = result+1;
    document.getElementById('result').textContent = `result: ${result} (${typeof result})`;
};

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x)
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);