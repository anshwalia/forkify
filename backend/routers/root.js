'use strict';

// Node Modules
const { Router } = require('express');

// Root Controller
const RootController = require('../controllers/root');

// Root Router Instance
const RootRouter = new Router();

// Routes

// Root - GET
RootRouter.get('/',RootController.GET);

// Router Export
module.exports = RootRouter;