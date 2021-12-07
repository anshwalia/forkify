'use strict';

// View Module
const View = {

    // Method To Create Recipie Card
    createRecipeCard: function(category="",name="",cook_time=0){
        return new Promise((resolve,reject) => {
            try{
                const recipieCard = document.createElement("div");
                recipieCard.className = "card m-3 p-0";
                recipieCard.innerHTML = `
                    <div class="card-header">
                        <p>${category}</p>
                    </div>
                    <div class="card-body">
                        <h3 class="heading">${name}</h3>
                    </div>
                    <div class="card-footer">
                        <p>${cook_time} Minutes</p>
                    </div>
                `;
                resolve(recipieCard);
            }
            catch(error){ reject(error); }
        });
    },

    // Method To Create Multiple Recipie Cards
    createRecipeCards: async function(recipes=[]){
        try{
            const recipeCards = [];
            for(let i = 0; i < recipes.length; i++){
                const recipeCard = await this.createRecipeCard(recipes[i].category,recipes[i].name,recipes[i].cook_time);
                recipeCards.push(recipeCard);
            }
            console.log(recipeCards);
            return recipeCards;
        }
        catch(error){ console.error(error); }
    }

}

export default View;