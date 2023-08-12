const express = require("express");
const { registerUsers, loginUsers, currentUser } = require("../contact controllers/userController");
const validation = require("../Middleware/tokenValidation");

const router = express.Router();

router.post("/register", registerUsers);

router.post("/login", loginUsers)

router.get("/current",validation,  currentUser)


module.exports = router;