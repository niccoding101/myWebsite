const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/authenticate', (req, res) => {
    const { email, password } = req.body;

    // Implement your authentication logic here (replace with your own logic)
    // For demonstration purposes, a simple check is performed. In a real-world scenario, use secure authentication methods.
    if (email === 'user@example.com' && password === 'password') {
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

