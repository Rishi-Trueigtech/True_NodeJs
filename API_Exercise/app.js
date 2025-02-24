const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./src/routes/userRoutes');
const tourRoutes = require('./src/routes/tourRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');
const auth = require('./src/middlewares/auth');

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/tours', auth, tourRoutes); // Protecting tour routes
app.use('/api/bookings', auth, bookingRoutes); // Protecting booking routes


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });