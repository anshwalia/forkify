'use strict';

// Node Modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Routers
const RootRouter = require('./routers/root');
const AllRouter = require('./routers/all');
const SearchRouter = require('./routers/search');

// Express App Instance
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
// ROOT
app.use('/',RootRouter);
// SEARCH
app.use('/search',SearchRouter);
// INVALID


// Instance Export
module.exports = app;
