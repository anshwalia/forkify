'use strict';

// Express Router Module
const { Router } = require('express');

// Invalid Route Handler
const InvalidRequestHandler = require('../controllers/invalid');

// Invalid Route Router Instance
const InvalidRouter = Router();

// ROUTES
InvalidRouter
.get('/',InvalidRequestHandler)
.post('/',InvalidRequestHandler)
.put('/',InvalidRequestHandler)
.delete('/',InvalidRequestHandler);

// Invalid Router Export
module.exports = InvalidRouter;