// random color generator
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor
    console.log("color updated")

    // change ccolor of div
    let div = document.querySelector("div");
    div.style.backgroundColor=randomColor;
})

let getRandomColor = ()=>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color =`rgb(${red},${green},${blue})`;
    return color;
}   

