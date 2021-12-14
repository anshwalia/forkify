'use strict';

// Module Imports
// Models
import State from './models/State.js';
import DataModel from './models/Data.js';
import ValidationModel from './models/Validation.js';
// View
import View from './View.js';

// Controller Module
const Controller = {

    State: null,
    DataModel: null,
    ValidationModel: null,
    View: null,


    // Controller Initialization Method
    init: async function(ContentBoxElement){
        try{
            this.State = new State();
            this.DataModel = new DataModel();
            this.ValidationModel = new ValidationModel();
            this.View = new View(ContentBoxElement);
        }
        catch(error){ throw error; }
    },

    // Method To Get All Recipies From API
    getAllRecipes: async function(){
        try{ 
            this.State.recipes = await this.DataModel.loadAllRecipes(); 
        }
        catch(error){ console.error(error); }
    },

    // Method To Get Matching Recipes
    getMatchingRecipes: async function(searchTerm=""){
        try{
            if(searchTerm.length >= 3){
                this.State.matchingRecipes = await this.DataModel.loadMatchingRecipes(searchTerm);
                if(this.State.matchingRecipes !== null){
                    await this.View.renderRecipeCards(this.State.matchingRecipes);
                    console.log("Matching Recipes Rendered");
                }
                else{
                    alert("No Matching Recipes Found! Try Again.");
                    console.log("No Matching Recipes Found!");
                }
            }
            else{
                alert("Search Term Should Atleast Be 3 Characters Long!");
            }
        }
        catch(error){ console.error(error); }
    },

    // Method To Display All Recipies In Content Box AS Cards
    displayRecipes: async function(){
        try{
            await this.View.renderRecipeCards(this.State.recipes);
        }
        catch(error){ console.error(error); }
    },

    // Method To Display Recipe Sheet
    displayRecipeSheet: async function(){
        try{
            await this.View.renderRecipeSheet();
            console.log("Recipe Sheet Rendered!");
        }
        catch(error){ throw error; }
    }
}

export default Controller;