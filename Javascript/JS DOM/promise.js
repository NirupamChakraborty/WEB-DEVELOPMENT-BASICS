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


// PROMISE CHAINING 

saveToDb("hello world")
.then(()=>{
    console.log("promise fullfilled : success 1")
    saveToDb("apna college")
    .then(()=>{
        console.log("saved success ")
    })
})
.catch(()=>{
    console.log("promise rejected")
})


// above is like nested callbck 
// more readable code

saveToDb("hello world")
.then((result)=>{
    console.log("promise fullfilled : success 1")
    console.log(result)
    return saveToDb("apna college")
})
.then((result)=>{
        console.log("saved success ")
        console.log(result)
})
.catch((error)=>{
    console.log("promise rejected")
    console.log(error)
})