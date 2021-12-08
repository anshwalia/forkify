'use strict';

// Express Modules
const { Router } = require('express');

// All Controller
const AllController = require('../controllers/all');

// Router Instance
const AllRouter = new Router();

// Routes
AllRouter.get('/',AllController.GET);

// Module Export
module.exports = AllRouter;