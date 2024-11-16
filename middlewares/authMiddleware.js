const authMiddleware = (req, res, next) => {
    /*const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Authentication Token required' });
    }*/
    next();
};

module.exports = authMiddleware;
