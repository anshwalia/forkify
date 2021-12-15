'use strict';

// Module Imports
import App from './src/js/App.js';
import Controller from './src/js/Controller.js';

// JQuery
$(document).ready(async () => {

    async function startup(){
        try{
            App.AlertBox = document.querySelector("#AlertBox");
            App.ContentBox = document.querySelector("#ContentBox");
            App.Controller = new Controller(App.AlertBox,App.ContentBox);
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
            await App.Controller.getMatchingRecipes(searchTerm);
            $("#ContentBox").fadeIn('slow');
        }
        catch(error){ console.error(error); }
    });

    $("#getAllRecipesBtn").click(async () => {
        try{
            await App.Controller.getAllRecipes();
            await App.Controller.displayAllRecipes();
            $("#ContentBox").fadeIn('slow');
        }
        catch(error){ console.error(error); }
    });
    // -------------------------------------------------------------

});