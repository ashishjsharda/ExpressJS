const express=require('express')
const app=express();
const port=3002;
app.get("/",(req,res) => {
    res.send("Hello GET");
}).listen(port,() => {
    console.log("Listening on port 3002")
});
