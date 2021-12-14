'use strict';

// Module Imports
import Controller from './src/js/Controller.js';

// JQuery
$(document).ready(async () => {

    // Controller Instance
    let controller = null;

    async function startup(){
        try{
            const AlertBox = document.querySelector("#AlertBox");
            const ContentBox = document.querySelector("#ContentBox");
            controller = new Controller(AlertBox,ContentBox);
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
            await controller.getMatchingRecipes(searchTerm);
            $("#ContentBox").fadeIn('slow');
        }
        catch(error){ console.error(error); }
    });

    $("#getAllRecipesBtn").click(async () => {
        try{
            await controller.getAllRecipes();
            await controller.displayAllRecipes();
            $("#ContentBox").fadeIn('slow');
        }
        catch(error){ console.error(error); }
    });
    // -------------------------------------------------------------

});