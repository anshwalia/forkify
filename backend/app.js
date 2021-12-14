'use strict';

// Node Modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Routers
const RootRouter = require('./routers/root');
const AllRouter = require('./routers/all');
const SearchRouter = require('./routers/search');
const RecipeRouter = require('./routers/recipe');
const InvalidRouter = require('./routers/invalid');

// Express App Instance
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Static Files
app.use('/static',express.static(path.resolve(__dirname,'./public')));

// Routes
// ROOT
app.use('/',RootRouter);
// ALL
app.use('/all',AllRouter);
// SEARCH
app.use('/search',SearchRouter);
// RECIPE
app.use('/recipe',RecipeRouter);
// INVALID
app.use('/*',InvalidRouter);

// Instance Export
module.exports = app;
