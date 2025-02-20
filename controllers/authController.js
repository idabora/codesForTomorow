const jwt = require('jsonwebtoken');

// Hardcoded credentials (for demo purposes)
const ADMIN_EMAIL = "admin@codesfortomorrow.com";
const ADMIN_PASSWORD = "Admin123!@#";

// Login API (Generates JWT token)
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};

module.exports = { login };
