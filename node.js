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

// In this instance, the user database (users array) on the server is in-memory, and each user object contains an id, email address, and password. 
// This would be replaced in a production setting with a suitable database and safe password hashing methods.
// This code verifies that the password matches and that the email address entered is present in the database. 
// It's crucial to remember that it is unsafe to save passwords in plain text, as this example illustrates.
// For increased security, you should actually utilize salting and hashing of passwords. For this, Node.js has packages like bcrypt that can be useful.


