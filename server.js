const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const https = require('https');
const privateKey = fs.readFileSync('cert/key.pem', 'utf8');
const certificate = fs.readFileSync('cert/cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const server = https.createServer(credentials, app);

const PORT = 8000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
