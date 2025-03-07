import bodyParser from "body-parser";
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import messageRouter from "./routes/messageRoutes.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/message", messageRouter);

connectDB();

app.listen(3001, () => console.log("Server is running on Port 3001"));
