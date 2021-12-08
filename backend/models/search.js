'use strict';

// SEARCH MODEL
const SearchModel = {

    // Method To Search Recipe By Name
    searchByName: function(searchTerm='',objectArray=[]){
        return new Promise((resolve,reject) => {
            try{
                const match = [];
                const regex =  new RegExp(searchTerm,'i');
                for(let i = 0; i < objectArray.length; i++){
                    const recipeName = objectArray[i].name;
                    const result = recipeName.search(regex);
                    if(result >= 0){ match.push(objectArray[i]); }
                }
                if(match.length >= 1){ resolve(match); }
                else{ resolve(null); }
            }
            catch(error){ reject(error); }
        });
    },
}

// Search Model Module Export
module.exports = SearchModel;