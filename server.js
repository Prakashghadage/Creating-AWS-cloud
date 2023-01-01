const express=require('express');
const bodyparser=require('body-parser');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{

    res.sendFile("./index.html",{root:__dirname});

})
 app.listen(3000);
 console.log("letssssss start");