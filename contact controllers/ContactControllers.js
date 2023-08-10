// @desc Getall Contacts
const Contacts = require("../models/contactModels")
const asyncHandler = require("express-async-handler")

// get api/contacts
const GetAllContacts = asyncHandler( async (req, res)=> {
    const contacts =await Contacts.find();
    res.status(200).json(contacts) ;
});


// @desc Create Contact
// Post api/contacts
const CreateContacts =asyncHandler( async (req, res)=> {
    console.log("the requested body is " ,req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("all feilds are mandatory")
    }
    const contact = await Contacts.create({
        name,
        email,
        phone,
    })
    res.status(200).json(contact) ;
});


// @desc Get Contact
// get api/contacts/:id
const GetContact =asyncHandler( async (req, res)=> {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Could not find the contact")
    }
    res.status(200).json(contact) ;
});

// @desc Update Contacts
// get api/contacts/:id
const UpdateContact =asyncHandler( async (req, res)=> {
     const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Could not find the contact")
    }
    const updatedContacts = await Contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updatedContacts);
});

// @desc Delete Con
// get api/contacts/:id
const Deletecontact =asyncHandler( async (req, res)=> {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Could not find the contact")
    }
    await Contacts.findByIdAndDelete(req.params.id);
    res.status(200).json(contact) ;
});


module.exports = {GetAllContacts, CreateContacts, GetContact, UpdateContact, Deletecontact};