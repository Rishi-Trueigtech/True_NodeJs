const express = require("express");
const morgan = require("morgan");
const AppError = require("./appError");
const handleError = require("./errorController");

const app = express();

app.use(morgan("common"));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/error',(req, res, next)=>{
    next(new AppError("This is a test error!", 400));
});

app.use(handleError);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});