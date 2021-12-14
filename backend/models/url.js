'use strict';

// Node Modules
const dotenv = require('dotenv');
dotenv.config();

const URLModel = {

    resolve: function(URL=""){
        try{ return `http://localhost:${process.env.PORT}${URL}`; }
        catch(error){ console.error(error); }
    },

}

module.exports = URLModel;