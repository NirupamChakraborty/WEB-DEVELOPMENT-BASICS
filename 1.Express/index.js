const express = require('express');
const app = express();

// console.dir(app);
let port = 3000;
app.listen(port, ()=>{
    console.log("app is listening to port ", port);
})

// TO SEND ANY RESPONSE

// app.use((req,res)=>{
    // console.log("request recieved");
    // console.log(req)
    //we can send text, object, html code in res.send()

    // res.send("This a response")

    // res.send({
    //     name: "mango",
    //     color: "yellow",
    //     taste: "sweet"
    // })

    //HTML CODE
    // let code ="<h1>mango</h1><ul><li>Indian</li><li>American</li><li>Australian</li></ul>"
    // res.send(code)

// })

// GET AND POST REQUEST


// app.get("/", (req,res)=>{
//     res.send("you contacted root path")
// })

// app.get("/apple", (req,res)=>{
//     res.send("you contacted apple path")
// })


// app.get("/mango", (req,res)=>{
//     res.send("you contacted mango path")
// })

// app.get("/strawberry", (req,res)=>{
//     res.send("you contacted strawberry path")
// })
// // * means all possible paths

// app.get("*",(req,res)=>{
//     res.send("this path doesnot exist")
// })

// app.post("/", (req,res)=>{
//     res.send("you sent post request")
// })
app.get("/search", (req,res)=>{
    console.log(req.query);
    let { q } = req.query;
    if(!q){
        res.send("nothing searched")
    }
    res.send(`you searched for ${ q }`)
});