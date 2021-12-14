'use strict';

// Model Modules Import
const IOModel = require('../models/io');
const SearchModel = require('../models/search');
const URLModel = require('../models/url');

// SEARCH CONTROLLER
const SearchController = {

    GET : async function(req,res){
        try{
            const { name } = req.query;
            
            if(name.length >= 3){
                const recipes = await IOModel.getRecipes();
                let matchingRecipes = await SearchModel.searchByName(name,recipes);

                if(matchingRecipes !== null){
                    // Constructing Image URLs
                    matchingRecipes = matchingRecipes.map(recipe => {
                        recipe.imageURL = URLModel.resolve(recipe.imageURL);
                        return recipe;
                    });

                    // Response
                    res
                    .status(200)
                    .json({
                        ok: true,
                        status: 'success',
                        recipes: matchingRecipes
                    });
                }
                else{
                    // Response
                    res
                    .status(404)
                    .json({
                        ok: false,
                        status: 'failed',
                        message: "Not Matching Recipes Found" 
                    });
                }
                
            }
            else{
                // Response
                res
                .status(400)
                .json({ 
                    ok: false, 
                    status: 'failed', 
                    message: "Search term must be atleast 3 characters long." 
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

// Search Controller Module Export
module.exports = SearchController;