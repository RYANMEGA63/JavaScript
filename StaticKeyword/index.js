try{
let htmlList = [];
    function consoleLog(...strings){
        /*
        if(color === ''){
            selfcolor = 'black';
        }else if(color==1){
            htmlList = [];
            selfcolor = 'black';
        }else{
            selfcolor = color;
        }
        */
       selfcolor = 'black';
    for(string in strings){
    const CONSOLE = document.getElementById('console');
    const html = `<p
    style="color:${selfcolor};
    font-size:48px">
    ${strings[string]}
    </p>`;
    htmlList += html;
    CONSOLE.innerHTML = htmlList;
    }
}
// The Code

// static = keyword that defines propreties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class own anything static, not the objects)

class mathUtil{
    //static keyword
    static PI = 3.14159; //it belongs to the class itself
    //static Method
    static getDiameter(radius){
        return radius * 2;
    }
    static getcircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * (radius**2);
    }
}

class User{
    static userCount = 0;

    constructor(USERNAME){//constructor (creates the arguments of the object) when creating an object using the class
        this.USERNAME = USERNAME;
        User.userCount++;
    }
    static getUserCount(){
        consoleLog(`there are: ${User.userCount} users online!`)
    }
    sayHello(){
        consoleLog(`Hello! my name is ${this.USERNAME}`)
    } 
}
const user1 = new User('spongebob');
const user2 = new User('patrick');
const user3 = new User('sandy');
const users = [user1, user2, user3]; //array of all users

/*
for(let i = 0; i < users.length; i++){ //print the array
    consoleLog(users[i].USERNAME);
}
// consoleLog(user1.USERNAME);//belongs to the object
consoleLog(User.userCount);//belongs to the class itself
*/

user1.sayHello();
user2.sayHello();
user3.sayHello();
consoleLog(user1.USERNAME);
consoleLog(user2.USERNAME);
consoleLog(user3.USERNAME);
consoleLog(User.userCount);

User.getUserCount()


// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}