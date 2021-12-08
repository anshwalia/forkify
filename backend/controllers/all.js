'use strict';

// DATA MODEL MODULE
const DataModel = require('../models/io');

// ALL CONTROLLER
const AllController = {

    // GET
    GET : function(req,res){
        try{
            DataModel.readFile(path.resolve(__dirname,'../dummy-data/recipes.json'))
            .then((recipes) => { 
                res.status(200).json({
                    ok: true,
                    status: 'success',
                    recipes: recipes
                });
            })
            .catch((error) => { console.error(error); });
        }
        catch(error){ console.error(error); }
    },

}

module.exports = AllController;