const express = require("express");
const { GetAllContacts , CreateContacts, GetContact, UpdateContact, Deletecontact} = require("../contact controllers/ContactControllers");
const validation = require("../Middleware/tokenValidation");
const router = express.Router();




router.use(validation);
router.route("/").get(GetAllContacts).post(CreateContacts);
router.route("/:id").get(GetContact).put(UpdateContact).delete(Deletecontact);


module.exports = router;