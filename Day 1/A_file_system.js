const fs = require('fs');
const { text } = require('stream/consumers');

fs.readFile('./text2.txt','utf-8',(err,data)=>{
    console.log(data);
});

console.log('Reading The File....\n');