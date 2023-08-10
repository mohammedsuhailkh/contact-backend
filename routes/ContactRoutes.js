const express = require("express");
const { GetAllContacts , CreateContacts, GetContact, UpdateContact, Deletecontact} = require("../contact controllers/ContactControllers");
const router = express.Router();

router.route("/").get(GetAllContacts).post(CreateContacts);

router.route("/:id").get(GetContact).put(UpdateContact).delete(Deletecontact);


module.exports = router;