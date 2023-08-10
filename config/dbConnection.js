require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
