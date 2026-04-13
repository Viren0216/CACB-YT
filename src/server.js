import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/db.js';

connectDB();



/*
import express from 'express';
const app = express();

;( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",() => {
            console.log("error:", error);
            throw error
        })

        app.listen(process.env.PORT , () => {
            console.log( `Server is running on http://localhost:${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error:", error);
        throw err
    }
})()
    */