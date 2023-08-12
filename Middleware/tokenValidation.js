const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");


const validation = asyncHandler(async(req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                res.status(400);
                throw new Error("Authorization Failed")
            }
            req.loginUser = decoded.loginUser;
            next();

            if(!token){
                res.status(401);
                throw new Error("Authorisation faile, Token not valid")
            }
        })
    }
})

module.exports = validation;