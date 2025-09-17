

const myCheckBox = document.getElementById('MyCheckBox');
const visabtn = document.getElementById('visaBtn');
const mastercardbtn = document.getElementById('MasterCardBtn');
const paypallBtn = document.getElementById('paypallBtn');
const submit = document.getElementById('submit');
const SubResult = document.getElementById('SubResult');
const PaymentResult = document.getElementById('PaymentResult');

submit.onclick = function() {
    if(myCheckBox.checked){
        SubResult.textContent = 'you are subscribed !'
        if(visabtn.checked){
            PaymentResult.textContent = 'you are paying with visa'
        }
        else if(mastercardbtn.checked){
            PaymentResult.textContent = 'you are paying with master card'
        }
        else if(paypallBtn.checked){
            PaymentResult.textContent = 'you are paying with paypall'
        }
        else{
            PaymentResult.textContent = 'you must select a payment type!'
        }

    } else{
        SubResult.textContent = 'you are not subscribed !'
    }
}