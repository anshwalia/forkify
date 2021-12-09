'use strict';

// Config Import
import config from '../config.js';

// Card Components Module
const Card = {

    // Recipe Category Color
    recipeCategoryColor: function(recipeCategory=""){
        return (recipeCategory === "Non-Veg") ? "bg-danger" : "bg-success";
    },

    // Recipe Card Component
    recipeCard: function(recipe={}){
        return new Promise((resolve,reject) => {
            try{
                const newRecipeCard = document.createElement('div');
                newRecipeCard.classList = "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 p-3 m-0";
                newRecipeCard.innerHTML = `
                    <div class="card border border-1 border-secondary shadow rounded m-0 p-0">
                        <div class="card-header justify-content-evenly p-2 border-0">
                            <h3 class="heading m-0 mb-2 fw-bold">${recipe.name}</h3>
                            <p class="badge p-2 m-0 ${this.recipeCategoryColor(recipe.category)}">${recipe.category}</p>
                            <p class="badge p-2 m-0 bg-warning">${recipe.cook_time} Minutes</p>
                        </div>
                        <div class="card-body p-0 border-0">
                            <img class="card-img-top" src="${recipe.imageURL}" alt="${recipe.name}">
                        </div>
                        <div class="card-footer border-0">
                            <button type="button" class="btn btn-primary">See Full Recipe</button>
                            <button type="button" class="btn btn-primary">Share</button>
                        </div>
                    </div>
                `;
                resolve(newRecipeCard);
            }
            catch(error){ reject(error); }
        });
    }

}

export default Card;