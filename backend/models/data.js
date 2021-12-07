'use strict';

// Node Modules
const fs = require('fs');
const path = require('path');

const DataModel = {

    // Method To Read Data File
    readFile: async function(filePath=''){
        try{
            if(fs.existsSync(filePath) === true){
                const fileData = JSON.parse(fs.readFileSync(filePath));
                return fileData;
            }
            else{
                throw new Error("File Does Not Exist!");
            }
        }
        catch(error){ console.error(error);  }
    }

}

module.exports = DataModel;