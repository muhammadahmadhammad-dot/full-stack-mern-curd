import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/productRoutes.js"
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT || 3000;
const URL = process.env.DBURL;
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB Connected Successfully");
    console.log("Connecting to DB:", process.env.DBURL);

   
  })
  .catch((error) => console.log(error));
  
  app.use("/api/products",route);
  app.listen(PORT, () => console.log("server is start"));


