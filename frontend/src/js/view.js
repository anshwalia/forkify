'use strict';

// Component Modules Import
import Card from './components/cards.js'

// View Module
const View = {

    contentBox: null,

    init: async function(ContentBoxElement){
        try{
            this.contentBox = ContentBoxElement;
            console.log("View Init Complete!");
        }
        catch(error){ throw error; }
    },

    // Method To Create Multiple Recipie Cards
    createRecipeCards: async function(recipes=[]){
        try{
            const recipeCards = [];
            for(let i = 0; i < recipes.length; i++){
                const recipeCard = await Card.recipeCard(recipes[i]);
                recipeCards.push(recipeCard);
            }
            return recipeCards;
        }
        catch(error){ throw error; }
    },

    // Method To Render Recipe Cards 
    renderRecipeCards: async function(recipes=[]){
        try{
            this.contentBox.innerHTML = '';
            this.contentBox.style.display = 'none';
            const recipeCards = await this.createRecipeCards(recipes);
            for(let i = 0; i < recipeCards.length; i++){
                this.contentBox.appendChild(recipeCards[i]);
            }
        }
        catch(error){ throw error; }
    }

}

export default View;