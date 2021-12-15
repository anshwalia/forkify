'use strict';

// SEARCH MODEL
const SearchModel = {

    // Method To Search Recipe By Name
    searchByName: function(searchTerm='',recipes=[]){
        return new Promise((resolve,reject) => {
            try{
                const regex =  new RegExp(searchTerm,'i');
                
                const matchingRecipes = recipes.filter(recipe => {
                    const recipeName = recipe.name;
                    const result = recipeName.search(regex);
                    if(result >= 0){ return recipe; }
                });

                if(matchingRecipes.length >= 1){ resolve(matchingRecipes); }
                else{ resolve(null); }
            }
            catch(error){ reject(error); }
        });
    },

    // Method To Search Recipe By Id
    searchById: function(recipeId=0,recipes=[]){
        return new Promise((resolve,reject) => {
            try{
                recipes.filter(recipe => { if(recipe.id === recipeId){ resolve(recipe); } });
                resolve(null);
            }
            catch(error){ reject(error); }
        });
    }
    
}

// Search Model Module Export
module.exports = SearchModel;