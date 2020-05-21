const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.send("<b>Hello Express</b");
});
app.listen(8082,()=>{console.log("Listening on port 8082")});
