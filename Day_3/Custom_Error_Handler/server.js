const express = require('express');
const AppError = require('./appError');
const errorHandler = require('./errorHandler');

const app = express();

app.get('/error', (req, res, next) => {
    next(new AppError('This is a custom error!', 400));
});

app.use((req, res, next) => {
    next(new AppError('Route not found', 404));
});


app.use(errorHandler);

app.listen(3000, () => console.log('Server running on port 3000'));
