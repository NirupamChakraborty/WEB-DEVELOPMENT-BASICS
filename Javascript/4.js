// MOVIES PASS
let favmovie = "avatar";
let guess = prompt("guess the favmovie");
while ((guess!=favmovie) && (guess!="quit")) {
    guess=prompt("guess ")  
}
if(guess==favmovie){
    alert("congrats")
}