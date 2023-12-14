const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
        try {
            const { _id } = jwt.verify(token, process.env.SECRET);
        
            req.user = await User.findOne({ _id }).select("_id");
            next();
        
          } catch (error) {
            console.log(error);
            res.status(401).json({ error: "Request is not authorized" });
          }
}

module.exports = verifyToken;