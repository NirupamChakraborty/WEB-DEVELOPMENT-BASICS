let gameSeq=[];
let userSeq=[];

let started = false // tarck wheather the game has stsarted or not 
let level = 0;

let btns = ["red", "yellow", "blue", "green"]

let h3= document.querySelector("h3");

// press any key to start the game
document.addEventListener("keypress",()=>{
    if(started==false){
    console.log("game started");
    started = true;
    levelup();
    } 
});
// game start complete

let gamebtnFlash = (btn)=>{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },567)
}

let userFlash = (btn)=>{
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },567)
}


// level up function + button flash -> every time it flashes (start + user button press)
let levelup = ()=>{
    level++;
    h3.innerText=`Level ${level}`;

    // flash
    // random button choose
    let randomIndex = Math.floor(Math.random()* 3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor)
    console.log(gameSeq)
    gamebtnFlash(randomBtn);

}
// user
let btnPress =()=>{
    // console.log("btn was pressed");
    // to identify which btn was pressed by the user we use (this)
    // console.log(this)
    let btn = this;
    userFlash(btn); 

    userColor = btn.getAttribute("id")
    console.log(userColor)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}