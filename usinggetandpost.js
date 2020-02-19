const express=require('express');
const app=express();
app.get('/',(req,res) => {
    res.send("Hello World");
});

app.get('/items',(req,res) =>{
    res.send([1,2,3]);
});

app.post('/cart',(req,res) => {
    res.send("Adding items to cart");
});

const port=process.env.PORT ||3000;
app.listen(port,() =>console.log("Listening"));
