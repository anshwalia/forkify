'use strict';

// Express Router Module
const { Router } = require('express');

// Search Controller Module
const SearchController = require('../controllers/search');

// Search Router Instance
const SearchRouter = new Router();

// ROUTES

// GET
SearchRouter.get('/',SearchController.GET);


// Search Router Module Export
module.exports = SearchRouter;