require('dotenv').config({ path: '../.env' });
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user.isAdmin) {
            return res.status(403).json({ error: 'User is not Admin' });
        }

        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            // If the token is invalid or expired
            console.error('Error authenticating user:', error);
            return res.status(401).json({ error: 'Invalid or expired token' });
        }

        console.error('Error authenticating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = isAdmin;
