'use strict';

// Node Modules
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

// Express App Instance
const app = require('./app');

// Listen PORT
const PORT = process.env?.['PORT'] ?? 3000;

// HTTP Server Instance
const server = http.createServer(app);

// Server Listen
server.listen(PORT,() => {
    console.log(`SERVER STARTED @ PORT ${PORT}`);
});

