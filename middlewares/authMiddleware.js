const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: "NO TOKEN" });

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).josn({ message: 'Unauthorised' });
        req.userId = decoded.id;
        next();
    })
}
module.exports={verifyToken}