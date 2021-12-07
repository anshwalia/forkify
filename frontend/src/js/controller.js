'use strict';

// Module Imports
import Model from './model.js';
import View from './view.js';

// Controller Module
const Controller = {

    // Method To Get All Recipies From API
    getAllRecipies: async function(){
        try{
            const data = await Model.GET('http://localhost:5000/');
            if(data.ok === true){
                return data.recipies;
            }
            else{
                throw new Error(`Failed To Get Recipies : ${data.message}`);
            }
        }
        catch(error){ console.error(error); }
    },

    // Method To Display All Recipies In Content Box AS Cards
    displayAllRecipies: async function(recipies=[],parentElement){
        try{
            const recipieCards = await View.createRecipieCards(recipies);
            for(let i = 0; i < recipieCards.length; i++){
                console.log(recipieCards[i])
                parentElement.appendChild(recipieCards[i]);
            }
            return "All Recipies Displayed!";
        }
        catch(error){ console.error(error); }
    }
}

export default Controller;