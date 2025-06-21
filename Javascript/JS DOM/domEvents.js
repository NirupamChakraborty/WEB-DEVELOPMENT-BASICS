let btn = document.querySelector("button");
console.dir(btn);
// btn.onclick = ()=>{
//     console.log("button was clicked");
//     alert("you clicked the buttom");
// };

let hello = ()=>{
    alert("hrllo bhai");
};

let sayname =()=>{
    alert("aapka name");
};
// btn.onclick = hello;
// btn.onmouseenter =hello;

// inline html  // dont use
// onclick onmouseenter // can use
// another way is add event listeners
// addEventlisteners helps to execute multiple function when we click a button// addEventListeners
// element.addEventListener("event", "callbck");

btn.addEventListener("click", hello);
btn.addEventListener("click", sayname);
