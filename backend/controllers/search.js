'use strict';

// Node Modules
const path = require('path');

// Model Modules Import
const IOModel = require('../models/io');
const SearchModel = require('../models/search');

// SEARCH CONTROLLER
const SearchController = {

    GET : function(req,res){
        try{
            const { name } = req.query;
            if(name.length >= 3){
                console.log(name);
                IOModel.readFile(path.resolve(__dirname,'../dummy-data/recipes.json'))
                .then((recipes) => { return SearchModel.searchByName(name,recipes); })
                .then((results) => { 
                    if(results !== null){
                        res
                        .status(200)
                        .json({
                            ok: true,
                            status: 'success',
                            results: results
                        });
                    }
                    else{
                        res
                        .status(404)
                        .json({
                            ok: false,
                            status: 'failed',
                            message: "No Matching Recipe Found!"
                        });
                    }
                })
                .catch((error) => { console.error(error); });
            }
            else{
                res
                .status(400)
                .json({ 
                    ok: false, 
                    status: 'failed', 
                    message: "Search term must be atleast 3 characters long." 
                });
            }
        }
        catch(error){ console.error(error); }
    },
}

// Search Controller Module Export
module.exports = SearchController;