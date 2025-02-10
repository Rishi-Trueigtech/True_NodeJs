const fs = require("fs");

setTimeout(()=>console.log("Timer 1 finished"),1000);

setImmediate(()=>console.log("Immediate 1 finished"));

fs.readFile("NodeJs_Architecture",()=>{
    console.log("I/O finished")
});

console.log("Hello from the top-level code");