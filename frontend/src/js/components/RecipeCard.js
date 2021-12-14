'use strict';

// Recipe Card Component
class RecipeCard {

    constructor(){ console.log("[Recipe Card Instance Created]"); }

    // Method To Get Recipe Category Color Class
    #getRecipeCategoryColor(recipeCategory=""){
        return (recipeCategory === "Non-Veg") ? "bg-danger" : "bg-success";
    }

    // Recipe Card Component
    create(recipe){
        return new Promise((resolve,reject) => {
            try{
                const newRecipeCard = document.createElement('div');
                
                newRecipeCard.classList = "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 p-3 m-0";
                
                newRecipeCard.innerHTML = `
                    <div class="card shadow rounded m-0 p-0">
                        
                        <div class="card-header p-2 border-0">
                            <h3 class="heading m-0 mb-2 fw-bold">${recipe.name}</h3>
                            <p class="badge p-2 m-0 ${this.#getRecipeCategoryColor(recipe.category)}">${recipe.category}</p>
                            <p class="badge p-2 m-0 bg-warning">${recipe.cook_time} Minutes</p>
                        </div>
                        
                        <div class="card-body p-0 border-0">
                            <img title="${recipe.name}" class="card-img-top rounded-0" src="${recipe.imageURL}" alt="${recipe.name}">
                        </div>
                        
                        <div class="card-footer border-0 p-0 d-flex justify-content-center">
                            <div class="btn-group col-12" role="group">
                                <button title="View Recipe" type="button" class="btn btn-sm fw-bold view-btn rounded-0">View</button>
                                <button title="Save Recipe" type="button" class="btn btn-sm fw-bold save-btn rounded-0">Save</button>
                                <button title="Share Recipe" type="button" class="btn btn-sm fw-bold share-btn rounded-0">Share</button>
                            </div>
                        </div>

                    </div>
                `;
                
                resolve(newRecipeCard);
            }
            catch(error){ reject(error); }
        });
    }

}

export default RecipeCard;