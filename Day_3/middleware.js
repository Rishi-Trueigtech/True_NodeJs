//Middleware🤔
//➡️Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers. 
// They are the functions that are invoked by the Express.js routing layer.
//It is a flexible tool that helps add functionalities like logging, authentication, error handling, and more to Express applications. 


const express = require('express');
const app = express();

function mid(req,res,next) {
    console.log("Hello");
    next();
}

app.get('/',mid,(req,res)=>{
    res.end(
        `<div>
            <h2>Welcome to GeeksforGeeks</h2>
            <h5>Tutorial on Middleware</h5>
        </div>`
    );
});

app.listen(3001,()=>{
    console.log('Application is running on port 3001');
});