'use strict';

// Node Modules
const fs = require('fs');
const path = require('path');

// CONFIG Module Import
const CONFIG = require('./config');

// Input/Output Model
const IOModel = {

    // Method To Read Recipe Data From Data File
    getRecipes: async function(){
        try{
            const dataFilePath = await CONFIG.DataFilePath();
            if(fs.existsSync(dataFilePath) === true){
                const recipes = JSON.parse(fs.readFileSync(dataFilePath));
                return recipes;
            }
            else{ throw new Error("File Does Not Exist!"); }
        }
        catch(error){ console.error(error);  }
    }

}

module.exports = IOModel;