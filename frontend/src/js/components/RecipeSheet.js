'use strict';

// Recipe View Component
class RecipeSheet {

    constructor(){ console.log("[Recipe Sheet Instance Created]"); }

    // Method To Create Recipe View
    create(recipe){
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
}

export default RecipeSheet;