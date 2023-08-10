const express = require("express");
const ErrorHandlers = require("./Middleware/ErrorHandlers");
const connectDB = require("./config/dbConnection");

const app = express();
// const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();
// using as a middleware
app.use(express.json());


app.use("/api/contacts", require("./routes/ContactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(ErrorHandlers);




app.listen(port, ()=>{
    console.log(`server started at port ${port}`);
})
