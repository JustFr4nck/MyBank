import express from 'express';
import path from 'path';
import dotenv from "dotenv";

dotenv.config();

const app = express();




app.listen(process.env.PORT, () => {

    console.log(`Server is online on localhost: ${process.env.PORT} `);
});