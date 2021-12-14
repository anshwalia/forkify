'use strict';

// Components Import
import RecipeCard from './components/RecipeCard.js'
import RecipeSheet from './components/RecipeSheet.js';

// View Module
class View {

    // Content Box Object
    #contentBox = null;
    #RecipeCard = null;
    #RecipeSheet = null;

    // View Initialization Method
    constructor(ContentBoxElement){
        try{ 
            this.#contentBox = ContentBoxElement;
            this.#RecipeCard = new RecipeCard();
            this.#RecipeSheet = new RecipeSheet(); 
        }
        catch(error){ throw error; }
    }

    // Method To Clear Content Box
    #clearContentBox(){
        return new Promise((resolve,reject) => {
            try{
                if(this.#contentBox !== null){
                    this.#contentBox.innerHTML = '';
                    resolve();
                }
                else{ throw new Error("[Content Box Not Initialized]"); }
            }
            catch(error){ reject(error); }
        });
    }

    // Method To Hide Content Box
    #hideContentBox(){
        return new Promise((resolve,reject) => {
            try{
                this.#contentBox.style.display = 'none';
                resolve();
            }
            catch(error){ reject(error); }
        });
    }

    // Method To Create Multiple Recipie Cards
    async #createRecipeCards(recipes=[]){
        try{
            const recipeCards = [];
            for(let i = 0; i < recipes.length; i++){
                const recipeCard = await this.#RecipeCard.create(recipes[i]);
                recipeCards.push(recipeCard);
            }
            return recipeCards;
        }
        catch(error){ throw error; }
    }

    // Method To Create Recipe Sheet
    async #createRecipeSheet(){
        try{
            const recipeSheet = await this.#RecipeSheet.create();
            return recipeSheet;
        }
        catch(error){ throw error; }
    }

    // Method To Render Recipe Cards 
    async renderRecipeCards(recipes=[]){
        try{
            await this.#clearContentBox();
            await this.#hideContentBox();
            const recipeCards = await this.#createRecipeCards(recipes);
            for(let i = 0; i < recipeCards.length; i++){
                this.#contentBox.appendChild(recipeCards[i]);
            }
            console.log("[Recipe Cards Rendered]");
        }
        catch(error){ throw error; }
    }

    // Method To Render Recipe Sheet
    async renderRecipeSheet(){
        try{
            await this.#clearContentBox();
            await this.#hideContentBox();
            const recipeSheet = await this.#createRecipeSheet();
            this.#contentBox.appendChild(recipeSheet);
            console.log("[Recipe Sheet Rendered]");
        }
        catch(error){ throw error; }
    }

}

export default View;