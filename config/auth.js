const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@codesfortomorrow.com' && password === 'Admin123!@#') {
        const token = jwt.sign({ id: email }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return res.json({ token });
    }
    return res.status(401).json({ message: 'Invalid Credentials' });
};

module.exports = { login };
