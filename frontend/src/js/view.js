'use strict';

// Components Import
import Alert from './components/Alert.js';
import RecipeCard from './components/RecipeCard.js'
import RecipeSheet from './components/RecipeSheet.js';

// View Module
class View {

    // Content Box Object
    #ContentBox = null;

    #Alert = null;
    #RecipeCard = null;
    #RecipeSheet = null;

    // View Initialization Method
    constructor(AlertBox,ContentBox){
        try{ 
            this.#ContentBox = ContentBox;
            this.#Alert = new Alert(AlertBox,3,true);
            this.#RecipeCard = new RecipeCard(ContentBox,true);
            this.#RecipeSheet = new RecipeSheet(ContentBox,true); 
        }
        catch(error){ throw error; }
    }

    // Method To Clear Content Box
    #clearContentBox(){
        return new Promise((resolve,reject) => {
            try{
                if(this.#ContentBox !== null){
                    this.#ContentBox.innerHTML = '';
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
                this.#ContentBox.style.display = 'none';
                resolve();
            }
            catch(error){ reject(error); }
        });
    }


    // Method To Render Recipe Cards 
    async renderRecipeCards(recipes=[]){
        try{
            await this.#clearContentBox();
            await this.#hideContentBox();
            await this.#RecipeCard.display(recipes);
        }
        catch(error){ throw error; }
    }

    // Method To Render Recipe Sheet
    async renderRecipeSheet(recipe){
        try{
            await this.#hideContentBox();
            await this.#RecipeSheet.display(recipe)
            console.log("[Recipe Sheet Rendered]");
        }
        catch(error){ throw error; }
    }

    // Method To Render Alert
    async renderAlert(type='',content=''){
        try{ this.#Alert.displayAlert(type,content); }
        catch(error){ throw error; }
    }

}

export default View;