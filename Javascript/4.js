// MOVIES PASS
// let favmovie = "avatar";
// let guess = prompt("guess the favmovie");
// while ((guess!=favmovie) && (guess!="quit")) {
//     guess=prompt("guess ")  
// }
// if(guess==favmovie){
//     alert("congrats")
// }
let heros =[["marcos","garud","paracamando"], ["army", "air","navy"]];
for (let i = 0; i < heros.length; i++) {
    console.log(i, heros[i], heros[i].length);
    for( let j =0; j< heros[i].length; j++){
        console.log(`j=${j}, ${heros[i][j]}`);
    }
    
}
// OBJECTS IN JS 
// JAVASCRIPT OBJECT LITERALS
// used to store keyed collection and complex entities
// property =>(key, value) pair
// OBJECTS are a collection of properties
const proton ={
    location: "nucleus",
    element: 1,
    present: "Atomic physics"
};
/*
 {
  key: value,
  key: value,
  key: value
 }
*/
const item={
    price: 100,
    discount: 50,
    colors: ["green", "greenyellow"]
};

// how to get the values
item["name"]
// or
item.name;
console.log(item.name)

// ADD/ UPDATE VALUE
item.discount = 75;
// ADD
item.quantity;
item.quantity =4569;

// DELETE
// delete item.quantity; not used much
// OBJECT OF OBJECTS OR NESTING
const pass = {
    Nirupam: {
        grade: "A",
        location: "Jorhat"
    },
    Sonu: {
        grade: "A",
        location: "Digboi"
    }
};

// To change Value
pass.Sonu.location = "Lachit Nagar"

// array of objects

const tshirt=[
    {
    size: "m",
    color:"green"
    },
    {
    size: "m",
    color:"GREEN YELLOW"
    }

    
];

tshirt[1].size="GREEN";

// Math object

Math.tan();
Math.PI
Math.E
Math.abs(12) //12
Math.abs(-12) //12 gives +ve number
pow(), floor(), ceil(), 
random() // 0 to 1 but 1 is exclusive
// Random intergers
let num = Math.random()
num =num*10;
num = Math.floor(num)
// in single line 
Math.floor(Math.random() * 10); //range = 0 to 9

Math.floor(Math.random() * 10) +1; //range = 1 to 10
// we 
// can make guess the number game
// using random number

// for range 1 to 5
Math.floor(Math.random() * 5) +1;  // this give range 1 to 5

