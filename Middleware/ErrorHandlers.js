const {constants} = require("../constants");
const ErrorHandlers = (error,req,res,next) =>{
    const statuscode = res.statuscode ? res.statuscode : 500;

    switch (statuscode) {
        case constants.VALIDATION_ERROR:
        res.json({title : "Validation Failed", message : error.message , stackTrace : error.stack});    
        break;

        case constants.NOT_FOUND:
        res.json({title : "Not Found", message : error.message , stackTrace : error.stack});
        break;
    
        case constants.FORBIDDEN:
        res.json({title : "Forbidden", message : error.message , stackTrace : error.stack});
        break;
    
        case constants.UNAUTHORIZED:
        res.json({title : "Unauthorized", message : error.message , stackTrace : error.stack});
        break;
    
        case constants.SERVER:
        res.json({title : "Server Error", message : error.message , stackTrace : error.stack});
        break;
            

        default:
            console.log("No Error");
            break;
    }


    // res.json({title : "Not Found", message : error.message , stackTrace : error.stack});
    // res.json({title : "Validation Failed", message : error.message , stackTrace : error.stack});

}

module.exports = ErrorHandlers;