const fs = require('fs');

const textIn = fs.readFileSync('./text1.txt','utf-8');   // Synchronous way of reading a file.
console.log(textIn);

const textout = `Writting the File....\n`;

fs.writeFileSync('./text1.txt',textout);   //Synchronous way of writting the file
