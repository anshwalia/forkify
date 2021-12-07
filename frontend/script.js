'use strict';

// Module Imports
import Controller from './src/js/controller.js';

// DOM Objects
const contentBox = document.querySelector("#contentBox");

console.log(contentBox);

Controller.getAllRecipies()
.then((recipies) => { 
    return Controller.displayAllRecipies(recipies,contentBox); 
})
.then((status) => { console.log(status); })
.catch((error) => { console.error(error); });