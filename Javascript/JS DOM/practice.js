// add para that says i am green
let para = document.createElement("p");
para.innerText = "Hey, I'm green";
// to append this on the main html page
document.querySelector("body").append(para);
// adding style with class list
para.classList.add("green");

// create h3 that says hey im blue h3
let h3 = document.createElement("h3");
h3.innerText = "Hey, I'm blue h3";
// to append this on the main html page
document.querySelector("body").append(h3);
// adding style with class list
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para1 = document.createElement("p");

h1.innerText = "Im in a div";
para1.innerText = "Hello world";
div.append(h1);
div.append(para1);
div.classList.add("box")

document.querySelector("body").append(div);
