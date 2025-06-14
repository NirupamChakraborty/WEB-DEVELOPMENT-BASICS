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