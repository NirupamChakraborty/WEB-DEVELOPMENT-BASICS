// ARRAY METHODS 
// These are highorder functios and take callbcks as arguments 
// 1. FOR EACH 
let arr = [1,2,3,4,5,6,7];
arr.forEach((el)=>{
    console.log(el);
});
arr.forEach(function (el){
    console.log(el);
});

let info= [{
    name:"aman",
    loc:"delhi",
    marks: 99
},
{
    name:"shraddha",
    loc:"delhi",
    marks:99.9
},
{
    name:"asim",
    loc:"punjab",
    marks:99.99
}];

// to print loc for each object 
info.forEach((el)=>{
    console.log(el.loc);
})

// 2. MAP 
// returns new array of same size that contains the returned elements
let arr3 = [1,2,3,4,5,6,7];
let triple = arr3.map((el)=>{
    return el*3;
});

console.log(triple)
let gpa = info.map((el)=>{
    return el.marks/10;
})
console.log(gpa);

// 3. FILTER 
// if callbck array output is true then the element is added in the final array
//  if false then it is not added 
let nums = [1,2,3,4,5,6,7];
// filter the odd  nums
let odd = nums.filter((el)=>{
    return el % 2 != 0;
});
console.log(odd)