//Routing🤔
//➡️Routing in Express.js refers to how an application’s endpoints (URIs) respond to client requests. 
// It defines how the server should handle different HTTP methods (like GET, POST, PUT, DELETE) 
// for specific routes.

//The basic syntax for defining a route in Express:
//app.METHOD(PATH, HANDLER);

const express = require('express');
const app = express();

//GET METHOD
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

//POST METHOD
app.post('/submit', (req, res) => {
    res.send('Form submitted successfully');
});

//PUT METHOD
app.put('/update', (req, res) => {
    res.send('Data updated successfully');
});


//DELETE METHOD
app.delete('/delete', (req, res) => {
    res.send('Data deleted successfully');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

