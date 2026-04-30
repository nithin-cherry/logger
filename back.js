const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    console.log("Visitor IP:", ip);

    res.sendFile(path.join(__dirname, 'logger.html'));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});