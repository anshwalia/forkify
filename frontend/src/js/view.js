'use strict';

// View Module
const View = {

    // Method To Create Recipie Card
    createRecipieCard: function(category="",name="",cook_time=0){
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
    createRecipieCards: async function(recipies=[]){
        try{
            const recipieCards = [];
            for(let i = 0; i < recipies.length; i++){
                const recipieCard = await this.createRecipieCard(recipies[i].category,recipies[i].name,recipies[i].cook_time);
                recipieCards.push(recipieCard);
            }
            console.log(recipieCards);
            return recipieCards;
        }
        catch(error){ console.error(error); }
    }

}

export default View;