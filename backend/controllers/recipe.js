'use strict';

// IO Model
const IOModel = require('../models/io');

// Search Model
const SearchModel = require('../models/search');

// Recipe Controller
const RecipeController = {

    // GET Method
    GET : async function(req,res){
        try{
            const { id } = req.params;
            const recipes = await IOModel.getRecipes();
            const recipe = await SearchModel.searchById(Number(id),recipes);

            if(recipe !== null){
                // Response
                res
                .status(200)
                .json({
                    ok: true,
                    status: 'success',
                    recipe: recipe
                });
            }
            else{
                // Response
                res
                .status(404)
                .json({
                    ok: false,
                    status: 'failed',
                    message: 'Invalid Recipe ID'
                });
            }
        }
        catch(error){
            console.error(error);
            // Response
            res
            .status(500)
            .json({
                ok: false,
                status: 'failed',
                message: 'Server Error'
            });
        }
    },

}

// Recipe Controller Module Export
module.exports = RecipeController;