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

// 3. methods with arguments
// indexOf() methods -> returns first index of occurence of substring or letter
let str ="IloveCodingv";
str.indexOf("love") // 1
str.indexOf("J") // -1 (not found)
console.log(str.indexOf("v")) // 3

// METHOD CHAINING 
