// using fetch onlu\y

// let url = "https://catfact.ninja/fact";
// fetch(url) // returns promise
// .then((response) => {
//     console.log(response)
//      return response.json() // makes the data readable
//     // to access the data 
//     .then((data) => {
//         console.log(data.fact)
//         return fetch(url)
//     })
//     .then((response)=>{
//         return response.json()
//     })
//     .then((data2) => {
//         console.log(data2.fact)
//     });
// }).catch((err) => {
//     console.log("error ", err)
// });  

// using async and await with fetch
// using async await is shorter

// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try {
//     let res = await fetch(url)
//     let data = await res.json()
//     console.log(data)
//     console.log(data.fact)

//     let res2 = await fetch(url)
//     let data2 = await res2.json()
//     console.log(data2)
//     console.log(data2.fact)
//     } catch (error) {
//         console.log("error", error)
//     }
    
// }



// the best is to use axios as it returns the direct response or readable form
let url = "https://catfact.ninja/fact";
async function getFacts(){
try {
        let res = await axios(url)
        console.log(res)
        console.log(res.data.fact)
        return res.data.fact
    } catch (error) {
        console.log("error", error)
        return "No fact found"
    }
}    

let btn = document.querySelector("button")
btn.addEventListener("click",async ()=>{
    let fact = await getFacts()
    let p = document.querySelector("#result")
    p.innerText =fact;

})