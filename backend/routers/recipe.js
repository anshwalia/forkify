'use strict';

// Express Router Module
const { Router } = require('express');

// Recipe Controller
const RecipeController = require('../controllers/recipe');

// Invalid Request Handler
const InvalidRequestHandler = require('../controllers/invalid');

// Recipe Router Instance
const RecipeRouter = Router();

// ROUTES
// GET - ALL
RecipeRouter.get('/all',RecipeController.GET_ALL);
// GET - ID
RecipeRouter.get('/:id',RecipeController.GET);

// INVALID ROUTES
RecipeRouter.get('*',InvalidRequestHandler);
RecipeRouter.post('*',InvalidRequestHandler);
RecipeRouter.put('*',InvalidRequestHandler);
RecipeRouter.delete('*',InvalidRequestHandler);

// Recipe Router Module Export
module.exports = RecipeRouter;