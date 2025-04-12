// String Methods in Javascript
// EG console.log()
// alert()
// let str = "apnaapp";
// str.abc();
// METHODS
// 1. trim() -> trims whitespaces from both ends but not from middle and returns new one
// let msg ="      Hello      "
// let ms ="     ge        mini                 "
// let newMsg =msg.trim();
// console.log(msg)
// console.log(newMsg)
// console.log(ms)
// let new_ms =ms.trim()
// console.log(new_ms)

// real eg 
// let password = prompt("enter your password");
// console.log(password.trim());

// strings are immutale in js, a new string is returned whenever we perform any operation

// 2. toUppercase() and toUppercase()
//  let up =msg.toUpperCase()
//  console.log(up)

// methods with arguments
// 3. indexOf() methods -> returns first index of occurence of substring or letter
let str ="IloveCodingv";
str.indexOf("love") // 1
str.indexOf("J") // -1 (not found)
console.log(str.indexOf("v")) // 3

// METHOD CHAINING 
let msg ="    hello   "
let nm = msg.trim().toUpperCase(); //left to right first trim then uppercase

console.log(nm)
// 4. slice(si, ei) ei is non included so ei +1
str.slice(5);
str.slice(1,5);
// str.slice(-1) = str.slice(str.length-1) means last letter
console.log(str.slice(-1))

// 5. replace()-> replaces a value
s1=str.replace("love","do")
t1=str.replace("o","p") // replaces first occurance
console.log(s1)
console.log(t1)

// 6. repeat() method returns a string with the number of copies of a string

console.log(str.repeat(3))
