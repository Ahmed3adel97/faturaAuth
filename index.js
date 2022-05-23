import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser";
import router from "./routes/router.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

mongoose.connect("mongodb://localhost:27017/Fatura", {
    useNewUrlParser: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to the database");
  });

  mongoose.connection.on("error", (err) => {
    console.error(`Failed to connected to the database: ${err}`);
  });
app.listen(3001, () => {
  console.log(1);
});
