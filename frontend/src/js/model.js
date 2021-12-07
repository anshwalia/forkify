'use strict';

// Model Module
const Model = {

    // Method To Get Data From API
    GET: async function(api_endpoint=''){
        try{
            const response = await fetch(api_endpoint);
            const data = response.json();
            return data;
        }
        catch(error){ console.error(error); }
    },

}


export default Model;