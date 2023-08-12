const mongoose = require("mongoose");


const userSchemas = mongoose.Schema({
   
    username:{
        type : String,
        required : [true, "please provide a username"]
    },

    email:{
        type : String,
        required : [true, "please add email"],
        unique : [true, "email already taken"]
    },
    
    password:{
        type : String,
        required : [true, "please provide a password"]
    },    
}, {
    timestamps : true
});

module.exports = mongoose.model("user", userSchemas);