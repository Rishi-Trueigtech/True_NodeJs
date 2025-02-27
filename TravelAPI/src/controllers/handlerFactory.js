const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const deletedRowCount = await Model.destroy({ where: { id: req.params.id } });

    if (!deletedRowCount) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  });


  exports.updateOne = Model =>
    catchAsync(async (req, res, next) => {
      const [updatedRowCount, updatedRows] = await Model.update(req.body, {
        where: { id: req.params.id },
        returning: true
      });
  
      if (!updatedRowCount) {
        return next(new AppError('No document found with that ID', 404));
      }
  
      res.status(200).json({
        status: 'success',
        data: {
          data: updatedRows[0]
        }
      });
    });
  

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    console.log("Model received in createOne:", Model);
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

  exports.getOne = (Model) =>
    catchAsync(async (req, res, next) => {
      const doc = await Model.findOne({ where: { id: req.params.id } });
  
      if (!doc) {
        return next(new AppError('No document found with that ID', 404));
      }
  
      res.status(200).json({
        status: 'success',
        data: {
          data: doc
        }
      });
    });
  
