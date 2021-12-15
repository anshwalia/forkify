'use strict';

// Express Router Module
const { Router } = require('express');

// Search Controller Module
const SearchController = require('../controllers/search');

// Invalid Request Handler
const InvalidRequestHandler = require('../controllers/invalid');

// Search Router Instance
const SearchRouter = new Router();

// ROUTES

// GET
SearchRouter.get('/',SearchController.GET);

// Invalid Routes
SearchRouter.get('*',InvalidRequestHandler);
SearchRouter.post('*',InvalidRequestHandler);
SearchRouter.put('*',InvalidRequestHandler);
SearchRouter.delete('*',InvalidRequestHandler);


// Search Router Module Export
module.exports = SearchRouter;