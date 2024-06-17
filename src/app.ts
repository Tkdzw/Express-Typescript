import express from "express";
import routes from './routes';
import dotenv from 'dotenv';
import { loadConfig } from "./config/config";
import sequelize from "./models/database";
// import { logger } from "./utils/logger";

dotenv.config();
const app = express();
const config = loadConfig();

// Use sequelize to interact with your database
sequelize.authenticate().then(() => {
    console.log('Database connection established');
  });

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api", routes)

app.listen(config.port, () => {
    console.log(`Server is running on https://localhost:${process.env.PORT}`)

})