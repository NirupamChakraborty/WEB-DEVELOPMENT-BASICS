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