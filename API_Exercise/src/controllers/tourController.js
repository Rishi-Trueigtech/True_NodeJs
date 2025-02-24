const Tour = require('../../models/Tour');

exports.createTour = async (req, res) => {
    const { title, description, price } = req.body;
    const tour = await Tour.create({ title, description, price });
    res.status(201).json(tour);
};

exports.getTours = async (req, res) => {
    const tours = await Tour.findAll();
    res.json(tours);
};