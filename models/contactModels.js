const  mongoose  = require("mongoose");


const contactSchemas = mongoose.Schema({
    user_id:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "user",
    },
    
    name:{
        type : String,
        required : [true, "please add contact name"]
    },

    email:{
        type : String,
        required : [true, "please add contact email"]
    },
    
    phone:{
        type : String,
        required : [true, "please add contact number"]
    },    
}, {
    timestamps : true
});

module.exports = mongoose.model("contacts", contactSchemas);

