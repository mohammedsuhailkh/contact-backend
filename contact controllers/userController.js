const asyncHandler = require("express-async-handler");
const user = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// desc Register new User
// end point /users/register
const registerUsers = asyncHandler( async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All feilds are required")
    }

    const userAvailable = await user.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("Another User is using this email")
    }
    // hashing password using bcrypt

    const hashedPaswd = await bcrypt.hash(password, 10);
    console.log("password :" , hashedPaswd);3




    const Createduser = await user.create({
        username,
        email,
        password : hashedPaswd,
    });
    console.log(`user created : ${Createduser}`);

    if(Createduser){
        res.status(201).json({_id : Createduser.id, email : Createduser.email})
    } else {
        res.status(400);
        throw new Error("User data is not valid")
    }
    res.json({message: "Register new user"})
});





// desc Login User
// end point /users/login
const loginUsers = asyncHandler( async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error("All feilds are mandatory");
    }
    // checking if there is already given email
    const loginUser = await user.findOne({email});
    // if email is there, checking the password and comparing it with the hashed password

    if(loginUser && (await bcrypt.compare(password, loginUser.password))){
        const accessToken = jwt.sign({
            loginUser: { 
                username : loginUser.username,
                email : loginUser.email,
                id : loginUser.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn : "15m"},
        );
        res.status(200).json({accessToken});
    } else{
        res.status(400);
        throw new Error("password or email does not match")
    }


    
});


// desc Shows current User
// end point /users/current
const currentUser = asyncHandler( async (req, res) => {
    res.json(req.loginUser)
});

module.exports = {registerUsers, loginUsers, currentUser};