const jwt = require('jsonwebtoken');

/**
 * Middleware d'authentification utilisateur
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {Function} next 
 */
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;

        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non  valable !';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: error | 'Requête non authentifiée !'
        })
    }
}