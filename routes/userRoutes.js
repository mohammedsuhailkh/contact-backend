const express = require("express");
const { registerUsers, loginUsers, currentUser } = require("../contact controllers/userController");

const router = express.Router();

router.post("/register", registerUsers);

router.post("/login", loginUsers)

router.get("/current", currentUser)


module.exports = router;