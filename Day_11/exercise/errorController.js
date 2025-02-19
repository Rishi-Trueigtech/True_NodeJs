const logger = require("./logger");

const handleError = (err, req, res, next) =>{
    logger.error(err.message);

    res.status(err.statusCode || 500).json({
        status: err.status || "error",
        message: err.message || "Internal Server"
    });
};

module.exports = handleError;