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
console.log("HI after")