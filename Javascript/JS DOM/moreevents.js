let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();  
})
let user = document.querySelector("#user")
user.addEventListener("change",()=>{
    console.log("input changed");
    console.log(user.value); 
})

user.addEventListener("input",()=>{
    console.log("input changed");
    console.log(user.value); 
})