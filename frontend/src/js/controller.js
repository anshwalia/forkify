'use strict';

// Module Imports
// Config
import { API_URL } from './Config'
// Models
import State from './models/State.js';
import DataModel from './models/Data.js';
import ValidationModel from './models/Validation.js';
// View
import View from './View.js';

// Controller Module
class Controller{
    
    // Model instances
    #State = null;
    #DataModel = null;
    #ValidationModel = null;
    // View Instance
    #View = null;

    // For Debugging
    #displayLogs = null;

    // Controller Initialization Method
    constructor(AlertBox,ContentBox,displayLogs=false){
        try{
            this.#State = new State();
            this.#DataModel = new DataModel(API_URL,true);
            this.#ValidationModel = new ValidationModel();
            this.#View = new View(AlertBox,ContentBox);
            this.#displayLogs = displayLogs;
            // For Debugging
            if(this.#displayLogs){ console.log("[Controller Class](Instance Created)"); }
        }
        catch(error){ throw error; }
    }

    // Method To Get All Recipies From API
    async getAllRecipes(){
        try{ 
            this.#State.allRecipes = await this.#DataModel.loadAllRecipes();
            // For Debugging
            if(this.#displayLogs){ console.log("[Controller Class](Get All Recipes)"); }
        }
        catch(error){ console.error(error); }
    }

    // Method To Get Matching Recipes
    async getMatchingRecipes(searchTerm=""){
        try{
            if(searchTerm.length >= 3){
                this.#State.matchingRecipes = await this.#DataModel.loadMatchingRecipes(searchTerm);
                if(this.#State.matchingRecipes !== null){
                    await this.#View.renderRecipeCards(this.#State.matchingRecipes);
                    await this.#View.renderAlert('success',`${this.#State.matchingRecipes.length} Matching Recipes Found!`);
                }
                else{
                    await this.#View.renderAlert('warning',"No Matching Recipes Found! Try Again.");
                    console.log("No Matching Recipes Found!");
                }
            }
            else{
                await this.#View.renderAlert('warning',"Search Term Should Atleast Be 3 Characters Long!");
            }
        }
        catch(error){ console.error(error); }
    }

    // Method To Display All Recipies In Content Box AS Cards
    async displayAllRecipes(){
        try{
            await this.#View.renderRecipeCards(this.#State.allRecipes,this.viewRecipe);
            await this.#View.renderAlert('success','All Recipes Displayed');
        }
        catch(error){ console.error(error); }
    }

    // Method To Display Recipe Sheet
    async displayRecipeSheet(){
        try{
            await this.#View.renderRecipeSheet();
            // For Debugging
            if(this.#displayLogs){ console.log("[Controller Class](Recipe Sheet Rendered)"); }
        }
        catch(error){ throw error; }
    }

    async viewRecipe(recipID=0){
        try{
            const recipe = this.#State.allRecipes.filter(recipe => (recipe.id === recipID));
            await this.#View.renderRecipeSheet(recipe);
            console.log(`Recipe ID : ${recipID}`);
        }
        catch(error){ console.log(error); }
    }
}

export default Controller;