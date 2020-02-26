const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res) =>res.send('Hello World'));
app.all('/secret',function(req,res,next){
    console.log("Accessing the next section");
    next();
})
app.listen(port,()=>console.log("Listening on port 3000"))
