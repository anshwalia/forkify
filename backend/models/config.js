'use strict';

// Node Modules
const path = require('path');

const CONFIG = {

    // Method To Get Recipe Data File Path
    DataFilePath: function(){
        return new Promise((resolve,reject) => {
            try{
                const filePath = path.resolve(__dirname,'../dummy-data/recipes.json');
                resolve(filePath);
            }
            catch(error){ reject(error); }
        });
    },

}

module.exports = CONFIG;