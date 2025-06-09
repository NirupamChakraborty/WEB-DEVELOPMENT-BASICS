/*ARROW FUNCTIONS

const func = (arg1, arg2) => {
    function defination
} */
const sum = (a,b) =>{
    console.log(a+b);
}
sum(4567,1);//func call
sum //function value means whats written in the function

const power = (a,b)=>{
    return a**b;
}
power(45,67);

// implicit return means when arrow functions only return a single value 
// we can remove the return keyword as well
const mul = (a,b)=>(a*b); // can remove parenthesis as well\

// SET TIMEOUT
// setTimeout(function,timeout) function is callbck means that it is func that is passed as 
// a parameter in another function  // timeout is in ms

console.log("hi before")
setTimeout(()=>{
    console.log("hi after 4567ms")
}, 4567);
console.log("HI after");


// SET INTERVAL -> keeps executing something after fixed interval
setInterval(()=>{
    console.log("hi after 4567ms")
}, 4567);

// to stop
const id = setInterval(()=>{
    console.log("hi after 4567ms")
}, 4567);

clearInterval(id);

// this with arrow functions

// ARROW-> lexical scope -> parent call scope 
// func -> scope ->this-> calling object
const student={
    name:"AMAN",
    location: "delhi",
    prop: this, //global
    getName: function () {
        console.log(this); //student scope
        return this.name;
    },
    getLocation: ()=>{
        console.log(this) // parent's scope
        return this.location;
    },
};
const a =567; // global scope
student.getName;
student.getLocation;

const sq =(n)=>n*n;
console.log(sq(4567));

let id1= setInterval(()=>{
    console.log("hello world");
},3000);

setTimeout(()=>{
    clearInterval(id);
},15000)