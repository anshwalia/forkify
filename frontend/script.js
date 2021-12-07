'use strict';

// Module Imports
import Controller from './src/js/controller.js';

// DOM Objects
const contentBox = document.querySelector("#contentBox");

console.log(contentBox);

Controller.getAllRecipes()
.then((recipes) => { 
    return Controller.displayAllRecipes(recipes,contentBox); 
})
.then((status) => { console.log(status); })
.catch((error) => { console.error(error); });