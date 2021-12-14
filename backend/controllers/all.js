'use strict';

// Node Modules
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// Models
const IOModel = require('../models/io');
const URLModel = require('../models/url');

// ALL CONTROLLER
const AllController = {

    // GET
    GET : async function(req,res){
        try{
            let recipes = await IOModel.getRecipes();

            if(recipes !== null){
                // Resolving Image URLs
                recipes = recipes.map(recipe => {
                    recipe.imageURL = URLModel.resolve(recipe.imageURL);
                    return recipe;
                });
                // Response
                res
                .status(200)
                .json({
                    ok: true,
                    status: 'success',
                    recipes: recipes
                });
            }
            else{
                // Response
                res
                .status(404)
                .json({
                    ok: false,
                    status: 'failed',
                    message: "No Recipes Found!"
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
                message: "Server Error"
            });
        }
    },

}

module.exports = AllController;