let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
// to stay on the same page nat nit redirect on a different page 
// we use event.preventDefault()
    event.preventDefault();
    alert("form submitted");
    // to access data from the forms 
let inp = document.querySelector("input");
console.log(inp.value)
})

// more events 
// change event
// input event 