'use strict';

// Recipe View Component
class RecipeSheet {

    #ContentBox = null;

    // For Debugging
    #displayLogs = null;

    constructor(ContentBox,displayLogs=false){ 
        try{
            this.#ContentBox = ContentBox;
            this.#displayLogs = displayLogs;
            // For Debugging
            if(this.#displayLogs){ console.log("[Recipe Sheet Instance Created]"); }
        }
        catch(error){ throw error; }
    }

    // Method To Create Recipe Sheet
    #create(recipe){
        return new Promise((resolve,reject) => {
            try{
                const recipeView = document.createElement('div');

                recipeView.className = "jumbotron-fluid bg-light shadow p-3 m-0 d-flex justify-content-center";

                recipeView.innerHTML = `
                    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-6 p-3 m-0 border">
                        <h1 class="heading m-0">Recipe Sheet</h1>
                    </div>
                `;

                resolve(recipeView);
            }
            catch(error){ reject(error); }
        });
    }

    // Method To Display Recipe Sheet
    async display(recipe){
        try{
            this.#ContentBox.innerHTML = '';
            const recipeSheet = await this.#create(recipe);
            this.#ContentBox.appendChild(recipeSheet);
        }
        catch(error){ throw error; }
    }

}

export default RecipeSheet;