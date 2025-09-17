let day = 'pizza';
switch(day){
    case 1:
        document.getElementById('result').textContent = 'it is sunday';
        break;
    case 2:
        document.getElementById('result').textContent = 'it is monday';
        break;
    case 3:
        document.getElementById('result').textContent = 'it is tuesday';
        break;
    case 4:
        document.getElementById('result').textContent = 'it is wednesday';
        break;
    case 5:
        document.getElementById('result').textContent = 'it is thursday';
        break;
    case 6:
        document.getElementById('result').textContent = 'it is Friday';
        break;
    case 7:
        document.getElementById('result').textContent = 'it is Saturday';
        break;
    default:
        document.getElementById('result').textContent = `${day} is not a day`;
    
}

let testscore = "100";
var lettergrade;

switch(true){
    case testscore == 100:
        lettergrade = "A+";
        break;
    case testscore >= 90:
        lettergrade = "A";
        break;
    case testscore >= 80:
        lettergrade = "B";
        break;
    case testscore >= 70:
        lettergrade = "C";
        break;
    case testscore >= 60:
        lettergrade = "D";
        break;
    default:
        lettergrade = "F";
        break;
}
document.getElementById('Score').textContent = `ur score is '${testscore}' and ur grade is '${lettergrade}'`