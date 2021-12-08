'use strict';

// Node Modules
const path = require('path');

// Data Model
const DataModel = require('../models/io');

// ROOT CONTROLLER 
const RootController = {


    GET: function(req,res){
        try{
            const { type } = req.params;
            console.log(type);
            res.status(200).json({
                ok: true,
                status: 'success',
                message: "Recipe API Active!"
            });
        }
        catch(error){ console.log(error); }
    },
    
}

// Controller Export
module.exports = RootController;