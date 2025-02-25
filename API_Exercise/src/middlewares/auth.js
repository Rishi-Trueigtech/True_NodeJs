const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    const bearerToken = token.split(' ')[1]; 

    try {
        const decoded = jwt.verify(bearerToken, "Rish6*");
        req.user = decoded; 
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
};

module.exports = auth;