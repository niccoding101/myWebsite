const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In-memory user database (replace with a real database in production)
const users = [
    { id: 1, email: 'user@example.com', password: 'password' },
    // Add more users as needed
];

app.use(bodyParser.json());

app.post('/authenticate', (req, res) => {
    const { email, password } = req.body;

    // Find user by email in the database
    const user = users.find(user => user.email === email);

    // Check if the user exists and the password matches (replace with secure password hashing in production)
    if (user && user.password === password) {
        res.json({ success: true, message: 'Authentication successful' });
    } else {
        res.json({ success: false, message: 'Authentication failed' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


// In order to run this program use
// node server.js

