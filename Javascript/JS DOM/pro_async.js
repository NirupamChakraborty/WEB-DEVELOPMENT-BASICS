async function greet(){
    // throw "just an error"
    return"hello";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log(result)
})
.catch((result)=>{
    console.log("promise was rejected");
    console.log(result)
})


// await 

function getNum(){
    // console.log(5);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10) +1;
            console.log(num)
            resolve();
        },1000)
    })
}

async function demo(){
   await getNum();
   await getNum()
   await getNum();
   await getNum()
   await getNum();
   await getNum()
   getNum()
}