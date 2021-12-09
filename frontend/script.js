'use strict';

// Module Imports
import Controller from './src/js/controller.js';

$(document).ready(async () => {

    await Controller.init(document.querySelector("#contentBox"));

    $(".container-fluid").fadeIn('slow');

    $("#getAllRecipesBtn").click(async () => {
        try{
            await Controller.getAllRecipes();
            await Controller.displayAllRecipes();
            $("#contentBox").fadeIn('slow');
        }
        catch(error){ console.log(error); }
    });

});