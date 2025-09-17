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
    
    // it is the same as console.error('error')
    function consoleError(...strings){
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
       selfcolor = 'red';
    for(string in strings){
        const CONSOLE = document.getElementById('console');
        const html = `<p
        style="color:${selfcolor};
        font-size:48px">
        ❌ ${strings[string]}
        </p>`;
        htmlList += html;
        CONSOLE.innerHTML = htmlList;
        }
    }
// The Code

// getter = special method that makes a property readable
// setters = special method that makes a property writeable

// validate and modify when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width; //-variable width-
        this.height = height; //-variable hegiht-
    }
    //width() must have the name of the variable that we wanna use (in this case, it is the -variable width-)
    //setter
    set width(newWidth){ //writes a variable, "_" stands for private variables (to help developers understand that u dont touch it because its used like kind of a verification system,), so we create this new variable
        if(newWidth>0){ //here, we test if our number is a positive number
            //then we assign it/create it
            this._width = newWidth;
        }else{
            //(cool thing i added) if the condition is NOT fulfilled, then we show an error (but the code still resumes)
            
            consoleError("Width must be a positive number");
            // it is the same as console.error('error')
        }
    }
    //setter
    set height(newheight){
        if(newheight>0){
            this._height = newheight;
        }else{
            consoleError("Height must be a positive number");
        }
    }
    //getter
    get width(){//here, width() stands for the -variable width- that we wanna assign it to
        return this._width.toFixed(1); //we return this._width, aka, we assign _width to -variable width-
        //it is the same as: width = _width, where _width is more like security and condition
    }
    get height(){
        return this._height.toFixed(1);
    }

    //we can even use variable that doesnt exist, for exemple here we CREATE the variable area, then we make its value the product of: height * width (both private, we use private cuz it has the condition), so it creates the variable and gives it to the object (in this case the rectangle object) and we can use it outside
    get area(){
        return (this._height * this._width);
        //same as: area = _height * _width
    }

    get Noarea(){
        return this.area.toFixed(2); //area became a variable of the object
    }

    get equation(){ //variables can also be functions
        return function(i){
            consoleLog(`${this.height}cm * ${this.width}cm = ${this.Noarea}cm² + ${i}i`)
        }
    }

}


/*

const rectangle = new Rectangle(100000000, 1000);

rectangle.width = 5; //we can even change the variable inside the object and it still verifies if the condition is met

consoleLog(rectangle.width, rectangle.height);

consoleLog("Area: " + rectangle.area);
consoleLog("NoArea: " + rectangle.Noarea);
rectangle.height = -2
rectangle.equation(5);

*/


class Person{
    constructor(firstName, LastName, age){
        this.FirstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
    //setter
    set FirstName(newFirst){
        if(typeof newFirst === 'string' && newFirst.length > 0){
            this._firstName = newFirst;
        }else{
            consoleError('First name must be a non-empty string');
        }
    }

    set LastName(newLast){
        if(typeof newLast === 'string' && newLast.length > 0){
            this._LastName = newLast;
        }else{
            consoleError('Last name must be a non-empty string');
        }
    }

    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        }else{
            consoleError('age must be a number');
        }
    }

    //getter
    get LastName(){
        return this._LastName;
    }

    get age(){
        return this._age;
    }

    get FirstName(){
        return this._firstName;
    }
}

const person = new Person("azerty", "gg", );

consoleLog("First Name: " + person.FirstName);
consoleLog("Last Name: " + person.LastName);
consoleLog("Age: " + person.age);





// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}