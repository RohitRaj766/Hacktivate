const { verifyToken } = require('../config/jwt');
// const Admin = require('../model/admin');
const Citizens = require('../model/citizens');


const authMiddleware = (model) => async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied' });
        }
        const decoded = await verifyToken(token);
        const user = await model.findOne({ _id: decoded.id});
        if (!user) {
            throw new Error('User not found');
        }
        req.user = user;
        next();
    } catch (err) {
        console.error('Token is not valid:', err);
        res.status(401).json({ error: 'Invalid User Unauthorised' });
    }
};

const citizensMiddleware = authMiddleware(Citizens);
// const adminMiddleware = authMiddleware(Admin);

module.exports = { citizensMiddleware,};
