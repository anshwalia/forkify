'use strict';

// Recipe Card Component
class RecipeCard {

    #ContentBox = null;

    // For Debugging
    #displayLogs = null;

    constructor(ContentBox,displayLogs=false){ 
        try{
            this.#ContentBox = ContentBox;
            this.#displayLogs = displayLogs;

            // For Debugging
            if(this.#displayLogs){ console.log("[Recipe Card Instance Created]"); }
        }
        catch(error){ throw error; }
    }

    // Method To Get Recipe Category Color Class
    #getRecipeCategoryColor(recipeCategory=""){
        return (recipeCategory === "Non-Veg") ? "bg-danger" : "bg-success";
    }

    // Recipe Card Component
    #create(recipe){
        return new Promise((resolve,reject) => {
            try{
                const newRecipeCard = document.createElement('div');
                
                newRecipeCard.classList = "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 p-3 m-0";
                
                newRecipeCard.innerHTML = `
                    <div class="card border shadow rounded m-0 p-0">
                        
                        <div class="card-header p-2 border-0">
                            <h3 class="heading m-0 mb-2 fw-bold">${recipe.name}</h3>
                            <p class="badge p-2 m-0 ${this.#getRecipeCategoryColor(recipe.category)}">${recipe.category}</p>
                            <p class="badge p-2 m-0 bg-warning text-dark">${recipe.cook_time} Minutes</p>
                        </div>
                        
                        <div class="card-body p-0 border-0">
                            <img title="${recipe.name}" class="card-img-top rounded-0" src="${recipe.imageURL}" alt="${recipe.name}">
                        </div>
                        
                        <div class="card-footer border-0 p-0 d-flex justify-content-center">
                            <div class="btn-group col-12" role="group">
                                <button title="View Recipe" type="button" class="btn ${this.#getRecipeCategoryColor(recipe.category)} fw-bold rounded-0">
                                    <img src="https://img.icons8.com/ios-filled/25/000000/knife-and-spatchula.png"/>
                                </button>
                                <button title="Save Recipe" type="button" class="btn ${this.#getRecipeCategoryColor(recipe.category)} fw-bold rounded-0">
                                    <img src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon--v1.png"/>
                                </button>
                                <button title="Share Recipe" type="button" class="btn ${this.#getRecipeCategoryColor(recipe.category)} fw-bold rounded-0">
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/share--v1.png"/>
                                </button>
                            </div>
                        </div>

                    </div>
                `;

                // For Debugging
                if(this.#displayLogs){ console.log("[Recipe Card Created]"); }
                
                resolve(newRecipeCard);
            }
            catch(error){ reject(error); }
        });
    }

    // Method To Create Multiple Recipe Cards
    async #createMultiple(recipes=[]){
        try{
            const recipeCards = [];
            for(let i = 0; i < recipes.length; i++){
                recipeCards.push(await this.#create(recipes[i]));
            }
            // For Debugging
            if(this.#displayLogs){ console.log(`[Created ${recipeCards.length} Recipe Cards]`); }
            return recipeCards;
        }
        catch(error){ throw error; }
    }

    // Method To Display Recipe Cards
    async display(recipes=[]){
        try{
            const recipeCards = await this.#createMultiple(recipes);
            for(let i = 0; i < recipeCards.length; i++){
                this.#ContentBox.appendChild(recipeCards[i]);
            }
            // For Debugging
            if(this.#displayLogs){ console.log(`${recipes.length} Recipe Cards Displayed`)}
        }
        catch(error){ throw error; }
    }

}

export default RecipeCard;