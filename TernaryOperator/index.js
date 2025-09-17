
let age = 18;
let message = age >= 18 ?"you're an adult" : "you're a minor";
document.getElementById('result1').textContent = message;

let time = 10;
let greeting = time < 12 ? "goodmorning" : "goodnight"
document.getElementById('result2').textContent = greeting;

let isStudent = false;
let messagee = isStudent ? "you are a student":"you are not a student"
document.getElementById('result3').textContent = messagee;

let purchaseAmount = 110;
var discount;
discount = purchaseAmount >= 100 ? "10":"0"
document.getElementById('result4').textContent = `your total is ${purchaseAmount - discount}$`;