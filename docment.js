const DocExpress =require('express')
const app = DocExpress()
const runningport=4000


app.get("/" ,(req,res)=>{
    res.send("hello world ")
})

app.listen(runningport ,()=>{
    console.log(`example running on port${runningport}`)
})

//this app run using node file name  example :node documnet.js