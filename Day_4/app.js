const express = require('express');
const app = express();

app.use(express.json()); //Incoming json data ko req.body main parse krta hai

const userRoutes = require('./userRoutes');
app.use('/users', userRoutes); 

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
