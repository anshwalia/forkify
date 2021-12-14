'use strict';

// Invalid Request Handler
function InvalidRequestHandler(req,res){
    try{
        // 404 - NOT FOUND - Response
        res
        .status(404)
        .json({
            ok: false,
            status: 'failed',
            message: "Invalid API Request"
        });
    }
    catch(error){
        console.log(error);
        // 500 - SERVER ERROR - Response
        res
        .status(500)
        .json({
            ok: false,
            status: 'failed',
            message: "Server Error"
        });
    }
}

module.exports = InvalidRequestHandler;