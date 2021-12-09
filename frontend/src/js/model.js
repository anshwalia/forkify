'use strict';

export const state = {
    recipes: [],
    recipe: {},
};

export const loadAllRecipes = async function(){
    try{
        const response = await fetch("http://localhost:5000/all");
        const data = await response.json();
        if(data.ok === true){ state.recipes = data.recipes; }
        else{ throw new Error("Unable To Fetch Recipes From API"+`Code : ${response.status}`); }
    }
    catch(error){ console.error(error); }
}

export const loadRecipe = async function(id=0){
    try{
        const response = await fetch(`http://localhost:5000/recipes/${id}`);
        const data = response.json();
        return data;
    }
    catch(error){ console.error(error); }
}