let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

// event listener
btn.addEventListener("click",()=>{
    if (input.value=="") {
        return;
    }
    let item = document.createElement("li");
    item.innerText = input.value;


    ul.appendChild(item);

    // console.log(input.value);
    //reset
    input.value ="";


    // delete button
    let dltBtn = document.createElement("button");
    dltBtn.innerText="delete";
    item.appendChild(dltBtn);
    dltBtn.classList.add("delete");

});


// this doesnot apply to newly created elements 
// let dltbtns = document.querySelectorAll(".delete");
// for(dltBtn of dltbtns){
//     dltBtn.addEventListener("click",()=>{
//         // we have delete the parent i.e. li item
//         let par = this.parentElement;
//         par.remove();
//     });
// }

// so to do this we use event delegation or event bubling 
// that means apply logic for parent instead of child 

ul.addEventListener("click", (event)=>{
    if(event.target.nodeName=="BUTTON") {
        let itemList = event.target.parentElement;
        itemList.remove();
    }
    
})

