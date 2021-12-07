'use strict';

// Node Modules
const path = require('path');

// Data Model
const DataModel = require('../models/data');

// ROOT CONTROLLER 
const RootController = {


    GET: function(req,res){
        try{
            DataModel.readFile(path.resolve(__dirname,'../dummy-data/recipies.json'))
            .then((recipies) => { 
                res.status(200).json({
                    ok: true,
                    status: 'success',
                    recipies: recipies
                });
            })
            .catch((error) => { console.error(error); });
        }
        catch(error){ console.log(error); }
    },
    
}

// Controller Export
module.exports = RootController;