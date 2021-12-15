'use strict';

// Data Model
class DataModel {

    // API URL
    #API_URL = null;

    // For Debugging
    #displayLogs = null;

    constructor(API_URL,displayLogs=false){
        try{
            this.#API_URL = API_URL;
            this.#displayLogs = displayLogs;
            // For Debugging
            if(this.#displayLogs){ console.log("[DataModel Class](Instance Created)"); }
        }
        catch(error){ throw error; }
    }

    // Request Time Out
    #requestTimeOut(timeSec=2){
        return new Promise((resolve,reject) => {
            try{
                const timeOut = setTimeout(() => {
                    resolve(null);
                },(timeSec*1000));
            }
            catch(error){ reject(error); }
        });
    }

    // Method To Load All Recipes From API
    async loadAllRecipes(){
        try{
            const response = await Promise.race([fetch(`${this.#API_URL}recipe/all`),this.#requestTimeOut()]);
            if(response !== null){
                const data = await response.json();
                if(data.ok === true){ return data.recipes; }
                else{ throw new Error("Unable To Fetch Recipes From API"+`Code : ${response.status}`); }
            }
            else{
                throw new Error("[ API Request Timed Out ]");
            }
        }
        catch(error){ throw error; }
    }

    // Method To Load Matching Recipes From API
    async loadMatchingRecipes(searchTerm=""){
        try{
            const response = await Promise.race([fetch(`${this.#API_URL}search?name=${searchTerm}`),this.#requestTimeOut()]);
            const data = await response.json();
            if(data.ok === true){
                return data.recipes;
            }
            else{
                if(response.status === 404){
                    console.log(`${data.message} : ${response.status}`);
                    return null;
                }
                else{ throw new Error(`${data.message} : ${response.status}`); }
            }
        }
        catch(error){ throw error; }
    }

    // Method To Load Recipe Using Recipe ID From API
    async loadRecipeById(id=0){
        try{
            const response = await fetch(`${API_URL}recipe/${id}`);
            const data = response.json();
            return data;
        }
        catch(error){ throw error; }
    }

}

export default DataModel;