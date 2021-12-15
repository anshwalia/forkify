'use strict';

const App = {
    // DOM Elements
    AlertBox: null,
    ContentBox: null,

    // App Controller
    Controller: null,

    // App Functions
    viewRecipe: function(RecipeID=0){
        console.log(`App View Recipe : ${RecipeID}`);
    }
}

export default App;