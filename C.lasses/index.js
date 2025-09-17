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

// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance


function Product(name, price){
    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        consoleLog(`Product: ${this.name}`);
        consoleLog(`Price: $${this.price.toFixed(2)}`);
    }
    this.CalculateTotal = function(SalesTax){
        return this.price + (this.price * SalesTax);
    }

    this.func = function(SalesTax){
        this.displayProduct();
        const total = this.CalculateTotal(Tax);
        consoleLog("Total price (with tax): " + "$" + total.toFixed(2));
    }
}

const Tax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pants", 22.50);
const product3 = new Product('Tie', 100)
const product4 = new Product('Zombie', 999999999)
/*
product2.displayProduct();
const total = product2.CalculateTotal(Tax);
consoleLog("Total price (with tax): " + "$" + total.toFixed(2))
*/
product4.func(Tax)


// returns errors if found
}catch(error){
    consoleLog(error, 'red');
}