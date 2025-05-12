const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user data (replace with actual database query)
const users = [
    {
        email: 'test@example.com',
        password: 'password123'
    }
];

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({message: 'Email and password are required'});
        }

        // Find user (replace with actual database query)
        const user = users.find(u => u.email === email);

        // Check if user exists and password matches
        if (!user || user.password !== password) {
            return res.status(401).json({message: 'Invalid email or password'});
        }

        // Generate JWT token
        const token = jwt.sign(
            {email: user.email},
            process.env.JWT_SECRET || 'your-secret-key',
            {expiresIn: '1h'}
        );

        res.json({token});
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({message: 'Internal server error'});
    }
});

module.exports = router;