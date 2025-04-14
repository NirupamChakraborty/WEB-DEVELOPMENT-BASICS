// ARRAYS IN JS (DATA STRUTURE)
let students = ["aman", "shradha", "rajat"];
console.log(students);
typeof students;
let info=["aman", 25, 7.569]; //mixed array
let newArr = [];
newArr[0] = "aman";
newArr[1] = 100;
console.log(newArr);
console.log(newArr[0][0]); // 0th letter at 0th index
console.log(newArr[0].length)
console.log(newArr.length)
//ARRAYS ARE MUTABLE
// ARRAY METHODS 
// PUSH POP SHIFT UNSHIFT
// 1. push
let cars=["bmv", "porsche","lambo","toyota"];
cars.push("pagani");
cars.push("proton");
console.log(cars);
cars.push("mahindra");
cars.push("tata");
// 2. pop
console.log(cars.pop()); //tata 
console.log(cars)
// 3. unshift -> add at first 
cars.unshift("maruti");
console.log(cars);
// 4. Shift
// cars.shift();
console.log(cars.shift())
console.log(cars);
// 5. indexof
a=cars.indexOf("porsche");
console.log(a);
//6. includes
aaa = cars.includes("porsche");
console.log(aaa);
// 7. concatenate
v8engine =["porsche", "supra", "land cruser"];
let ap=cars.concat(v8engine)
console.log(ap)
// 8. reverse
console.log(cars.reverse());

// 9. Slice ->ending index is exclusive
cars.slice() // copy of complete array
cars.slice(3) // index 3 till end
cars.slice(3,7) // 3,4,5,6
cars.slice(-1)// last index
// 10. splice -> removes / replaces / add elements in place
splice(start, deleteCount, item)
cars.splice(3)
cars.splice(1,4)
cars.splice(0,1,"black", "grey") // one element from starting is deleted and black and grey is put there 
// 11. SORT
console.log(cars.sort()); //alphabetially
// // sort work good with stringsss
// pass
// ARRAY REFERENCE -> address in memory
"name" == "name" //true
"name" === "name" //true
// [1]==[1] //false
// [1]===[1] // false
// []==[] //false
// []===[] //false 

// when we use const with array pass
// we can do operations like push pop etc with it but we cannot assign it to a completely new array
// like const arr =[1,"aman","shradha"] PASS
// const arr = ["bhai", "rajat","gaurav"] 
// we cant do that

// NESTED ARRAYS OR MULTIDIMENTIONAL ARRAYS PASS
let height =[[4,5],[5,6],[6,8]];
console.log(height);
document.display(height)