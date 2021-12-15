'use strict';

// IO Model
const IOModel = require('../models/io');
const URLModel = require('../models/url');

// Search Model
const SearchModel = require('../models/search');

// Recipe Controller
const RecipeController = {

    // GET RECIPE BY ID
    GET : async function(req,res){
        try{
            const { id } = req.params;
            const recipes = await IOModel.getRecipes();
            const recipe = await SearchModel.searchById(Number(id),recipes);

            if(recipe !== null){
                recipe.imageURL = await URLModel.resolve(recipe.imageURL);
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

    // GET ALL RECIPES 
    GET_ALL: async function(req,res){
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
            // Response
            res
            .status(500)
            .json({
                ok: false,
                status: 'failed',
                message: "Server Error"
            });

            throw error;
        }

    },

}

// Recipe Controller Module Export
module.exports = RecipeController;