//Routing parameters
//->Route parameters allow us to pass dynamic values in the URL.

//Query Parameters
//->Query parameters allow sending additional data in the URL.


const express = require('express');
const app = express();


//Route Parameters

app.get('/user/:id',(req,res)=>{
    res.end(`User ID: ${req.params.id}`);
});

//Query String

app.get('/search', (req, res) => {
    res.send(`Search query: ${req.query.query}`);
});


app.listen(3000,()=>{
    console.log('Application is running on port 3000');
})
