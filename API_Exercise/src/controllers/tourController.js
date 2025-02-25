const Tour = require('../../models/Tour');

exports.getAllTours = async (req, res, next) => {
    const tours = await Tour.findAll();
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours,
        },
    });
};

exports.createTour = async (req, res, next) => {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            tour: newTour,
        },
    });
};