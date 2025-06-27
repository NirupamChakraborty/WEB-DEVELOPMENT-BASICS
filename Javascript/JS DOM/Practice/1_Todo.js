let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
// event listener
btn.addEventListener("click",()=>{
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    // console.log(input.value);
    //reset
    input.value ="";
})


