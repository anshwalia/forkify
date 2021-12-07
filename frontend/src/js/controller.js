'use strict';

// Module Imports
import Model from './model.js';
import View from './view.js';

// Controller Module
const Controller = {

    // Method To Get All Recipies From API
    getAllRecipes: async function(){
        try{
            const data = await Model.GET('http://localhost:5000/');
            if(data.ok === true){
                return data.recipes;
            }
            else{
                throw new Error(`Failed To Get Recipies : ${data.message}`);
            }
        }
        catch(error){ console.error(error); }
    },

    // Method To Display All Recipies In Content Box AS Cards
    displayAllRecipes: async function(recipes=[],parentElement){
        try{
            const recipeCards = await View.createRecipeCards(recipes);
            for(let i = 0; i < recipeCards.length; i++){
                console.log(recipeCards[i])
                parentElement.appendChild(recipeCards[i]);
            }
            return "All Recipies Displayed!";
        }
        catch(error){ console.error(error); }
    }
}

export default Controller;