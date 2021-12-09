'use strict';

// Module Imports
import * as Model from './model.js';
import View from './view.js';

// Controller Module
const Controller = {

    init: async function(ContentBoxElement){
        try{
            await View.init(ContentBoxElement);
        }
        catch(error){ throw error; }
    },

    // Method To Get All Recipies From API
    getAllRecipes: async function(){
        try{
            await Model.loadAllRecipes();
            return Model.state.recipes;
        }
        catch(error){ console.error(error); }
    },

    // Method To Display All Recipies In Content Box AS Cards
    displayAllRecipes: async function(){
        try{
            await View.renderRecipeCards(Model.state.recipes);
            console.log("Recipe Cards Rendered!");
        }
        catch(error){ console.error(error); }
    }
}

export default Controller;