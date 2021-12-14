'use strict';

// Module Imports
import Controller from './src/js/Controller.js';

// JQuery
$(document).ready(async () => {

    async function startup(){
        try{
            await Controller.init(document.querySelector("#contentBox"));
            $(".container-fluid").fadeIn('slow');
        }
        catch(error){ console.error(error); }
    }

    await startup();
    
    // -------------------------------------------------------------
    // EVENTS
    // -------------------------------------------------------------
    $("#searchBtn").click(async () => {
        try{
            const searchTerm = $("#searchBox").val();
            $("#searchBox").val('');
            await Controller.getMatchingRecipes(searchTerm);
            $("#contentBox").fadeIn('slow');
        }
        catch(error){ console.error(error); }
    });

    $("#getAllRecipesBtn").click(async () => {
        try{
            await Controller.getAllRecipes();
            await Controller.displayRecipes();
            $("#contentBox").fadeIn('slow');
        }
        catch(error){ console.error(error); }
    });
    // -------------------------------------------------------------

});