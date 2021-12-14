'use strict';

// Express Router Module
const { Router } = require('express');

// Recipe Controller
const RecipeController = require('../controllers/recipe');

// Recipe Router Instance
const RecipeRouter = Router();

// ROUTES
// GET
RecipeRouter.get('/:id',RecipeController.GET);

// Recipe Router Module Export
module.exports = RecipeRouter;