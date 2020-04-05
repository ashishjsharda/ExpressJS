const express=require('express');
var app=express();
app.get('/',(req,res) =>{
    res.send('Hello');
}).listen(8082);
console.log('Listening on 8082');
