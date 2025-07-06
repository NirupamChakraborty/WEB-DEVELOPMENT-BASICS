// promises
// hell
// function saveToDb(data, success, unable){
//     let internetSpeed = Math.floor(Math.random() *10) +1;
//     if(internetSpeed > 4){
//         success()
//     }else{
//         unable()
//     }
// }

// saveToDb("apna college", ()=>{ 
//     console.log("your data is saved")
//     saveToDb("hello world",()=>{
//         console.log("data saved");
//         saveToDb("nested successfully",()=>{
//             console.log("success");
//         },
//         ()=>{
//             console.log("unable");
//         }
//     )
//     },
//     ()=>{
//         console.log("not saved")
//     }
// )
// },
// ()=>{
//     console.log("week data");
// }
// )

// refractor with promises
function saveToDb(data){
    return new Promise((resolve, reject) => {
       let internetSpeed = Math.floor(Math.random() *10) +1;
    if(internetSpeed > 4){
        resolve("success")
    }else{
        reject("rejected")
    } 
    });
    
}

// let request = saveToDb("hello world"); // req = promise object
// // console.log(request)
// request.then(()=>{
//     console.log("promise fullfilled")
//     console.log(request)
// })
// .catch(()=>{
//     console.log("promise rejected")
//     console.log(request)
// })


// SMALLER SYNTAX
saveToDb("hello world")
.then(()=>{
    console.log("promise fullfilled")
})
.catch(()=>{
    console.log("promise rejected")
})