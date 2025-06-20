let imgObj=document.getElementById("mainImg"); // gets the object of the image
//we know how to access and change vaues of elements of an object
console.log(imgObj.src);
// now we can change the src of img by changing its value
// imgObj.src="link of the image";
let oldImgHtml = document.getElementsByClassName("oldImg");
// gives html object for 3 images of same class that is old img
let smallImg = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImg.length; i++) {
    // smallImg[i].src = "link of spiderman img"
    console.log(smallImg[i]);
    
}
let tagp= document.getElementsByTagName("p");
document.querySelector("h1");
document.querySelector("#description");
document.querySelector(".oldImg");
document.querySelectorAll("div a");

// MANIPULATING HTML ELEMENTS WITH DOM
para.innerHTML ="<u>abc</u>";
para.innerText = "abc";
para.textContent 

// to manipulate the attribute we use get and set attribute
// obj.getAttributr(attr) 
// obj.setAttributr(attr, value) 

let img = document.querySelector("img");
img.getAttribute("id");
img.setAttribute("id", "spiderman");
//MANIPULATING STYLE
let heading= document.querySelector("h1");
heading.style;
heading.style.color= "green";  
let links = document.querySelectorAll(".box a");
//for of loop
for(link of links){
    link.style.color = "yellow";
}

// for loop 
// for(let i =0; i<links.length; i++){
//     links[i].style.color = "yellow";
// }

// using classlist
let heading = document.querySelector("h1");
heading.classList
heading.classList.add("green")

// ADDING ELEMENT
let newP = document.createElement("p");
console.dir(newP);
newP.innerText="hi its a pass"; 
// add() is not vissible in the document so to insert it into the document we use append functions
//  appendchild
//  so if we want to append newp to the body then 
let body = document.querySelector("body");
body.appendChild(newP); // now newp is the child of body
newp.append("this is new text");
newP.append(btn);
newP.append("do not click this button")
// we also have prepend 
// append adds in last perpend adds in first
newP.insertAdjacentElement("beforebegin", btn)
// to remove we use removeChild()

// practive question
