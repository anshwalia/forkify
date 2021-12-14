'use strict';

// CONFIG
import { API_URL } from './Config'

// Data Model
class DataModel {

    constructor(){ console.log("[Data Model Instance Created]"); }

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
            const response = await Promise.race([fetch(API_URL+'all'),this.#requestTimeOut()]);
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
            const response = await fetch(`${API_URL}search?name=${searchTerm}`);
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