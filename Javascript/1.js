/* In lecture 1 we read about console

Data types in JS

1. Primitive types
   number, boolean, string, undefined, null, 
   bigint,symbol ------> not used much
  

   use of typeof 456 
  'number'

  instagram follower/following  count(number)
  follow -> yes or no (boolean)
  text (string)

  we learnt about NaN
  0/0, nan-1, nan*1
  nan + nan

  type of nan = number
  

  OPERATOR PRECEDENCE
  ()
  **
  *,/,%
  +,-

  let keyword
  ASSIGNMENT OPERATORS
  1.Binary op
  +=
  /=
  *=

  2.Unary op
  ++
  a++ post inc
  ++a pre inc

  value in each line
  let num= 5; -> num =5
  let nuwNum = num++; -> newNum =5, num=6
  newNum= ++num; -> newNum =7 num=7


  boolean 
  true false
    

operators
  arithmatic
  comparision
  logical
  
comparisio op
  == value
  5==5
  true
  '5'==5 true

  ===  type and value
  5===5 
  true
  1==='1'
  false
  '1'==='1'
  true

  CONDITIONALS STATEMENTS
  if else
  nested if else
  switch

  truely and falsy value
js has every this associated to a true or false value

0,-0,"",null, undefined, NaN are falsy value else every thing is truth value


SWITCH STATEMENTS



*/
// good string
let str ="apple";
if(str[0]==='a' && str.length >= 3){
    console.log("good string")
}else{
    console.log("accha string")
}

// Alerts prompts
// alert("this is an alert")
console.log("this is simple clg");
console.error("this is error msg");
console.warn("this is simple warning")

// PROMPTS AND DIALOGUE BOX THAT CAN TAKE USER INPUT
let country=prompt("Enter a country")
console.log(country);