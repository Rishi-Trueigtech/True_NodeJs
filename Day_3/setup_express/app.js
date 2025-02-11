const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.end("Express Training");
});

app.listen(4000,()=>{
    console.log("App is running on port 4000");
});