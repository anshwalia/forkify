'use strict';

// Alert Component Class
class Alert{

    #AlertBox = null;
    #AlertCount = null;
    #MaxAlertCount = null;

    // Debugging
    #displayLogs = null;

    constructor(AlertBox,MaxAlertCount=3,displayLogs=false){
        try{
            this.#AlertBox = AlertBox;
            this.#AlertCount = 0;
            this.#MaxAlertCount = MaxAlertCount;
            this.#displayLogs = displayLogs;

            // For Debugging
            if(this.#displayLogs){ console.log("[Alert Instance Created]"); }
        }
        catch(error){ throw error; }
    }

    // Method To Clear Alert Box
    #clearAlertBox(){
        return new Promise((resolve,reject) => {
            try{
                this.#AlertBox.innerHTML = '';
                this.#AlertCount = 0;
                
                // For Debugging
                if(this.#displayLogs){ console.log("[Alert Box Cleared]"); }
                
                resolve();
            }
            catch(error){ reject(error); }
        });
    }

    // Method To Create Alert
    #createAlert(type='',content=''){
        return new Promise((resolve,reject) => {
            try{
                const newAlert = document.createElement('div');
                
                newAlert.attributes.role = "alert";

                newAlert.className = "col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-8";
                
                if(type === 'info'){ newAlert.className += " alert alert-primary alert-dismissible fade show"; }
                else if(type === 'success'){ newAlert.className += " alert alert-success alert-dismissible fade show"; }
                else if(type === 'warning'){ newAlert.className += " alert alert-warning alert-dismissible fade show"; }
                else if(type === 'error'){ newAlert.className += " alert alert-danger alert-dismissible fade show"; }
                else{ throw new Error("[Invalid Alert Type]"); }

                newAlert.innerHTML = `
                    <p class="text p-0 m-0">${content}</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;

                // For Debugging
                if(this.#displayLogs){ console.log("[New Alert Created]"); }

                resolve(newAlert);
            }
            catch(error){ reject(error); }
        });
    }

    // Method To Display Alert
    async displayAlert(type='',content=''){
        try{
            if(this.#AlertCount === this.#MaxAlertCount){ this.#clearAlertBox(); }
            const newAlert = await this.#createAlert(type,content);
            this.#AlertBox.appendChild(newAlert);
            this.#AlertCount += 1;
            
            // For Debugging
            if(this.#displayLogs){ console.log("[Alert Displayed]"); }
        }
        catch(error){ throw error; }
    }

}

export default Alert;