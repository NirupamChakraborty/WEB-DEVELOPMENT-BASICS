//function defination
function funcName(){
    // do something
}

// function calling
// funcName();j
function hello(){
    console.log("hello");

}
hello();

// function to roll a dice
function printDice(){
    let dice = Math.floor(Math.random()*6) +1;
}

printDice()
// arguments
// pass

function printInfo(name, age){
    console.log(`${name}'s age is${age}`); 
}
printInfo("Aman", 28);
printInfo("Pratik", 38);
printInfo("P", 38);
printInfo("A", 38);
printInfo("S", 38);
printInfo("S", 38);

// POWER FUNCTION
function multigreet(func, count){
    for (let i = 0; i < count; i++) {
        func();
    }
}

let greet = function(){
    console.log("hello");

}
multigreet(greet, 456);

// THIS KEY WORD -> this keyword refers to an object thaty is executing current peice of code(like object method)
const product={
    name: "colgate",
    qty: 4568,
    price: 456,
    availability: 99,
    gerAvg() {
        let avg= (this.qty+ this.price+ this.availability)/3;
        console.log(avg)
    }

};

// TRY CATCH
console.log("hello");
console.log("hello");
console.log(a); // error
console.log("hello1567");
console.log("hello1567");
console.log("hello1567");
// IF ERROOR OCCURS IN A LINE THE BOTTOM LINES WILL NOT EXECUTES

console.log("hello");
console.log("hello");
try{
console.log(a); // error
}catch{
    console.log(" caught an error... a is not defined");
}
console.log("hello1567");
console.log("hello1567");
console.log("hello1567");

// NOW WE TAKE CASE WHERE ERROR IS NOT OCCURED SO CATCH NOT EXECUTED

console.log("hello");
console.log("hello");
let a = 4567;
try{
console.log(a); // error
}catch{
    console.log(" caught an error... a is not defined");
}
console.log("hello1567");
console.log("hello1567");
console.log("hello1567");