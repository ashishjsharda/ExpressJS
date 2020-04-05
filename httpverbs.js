const express=require('express');
var app=express();
app.get('/get',(req,res) =>{
    console.log('Got a get request');
    res.send('Send get request');
});
app.post('/post',(req,res) =>{
    console.log('Send post request');
    res.send('Send post request');
});
app.put('/put',(req,res) =>{
    console.log('Send put request');
    res.send('Send put request');
});
app.delete('/delete',(req,res) =>{
    console.log('Send delete request');
    res.send('Send delete request');
});
app.listen(8082);
console.log('Listening on 8082');
