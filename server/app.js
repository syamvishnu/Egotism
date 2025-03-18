import bodyParser from "body-parser";
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import messageRouter from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/message", messageRouter);

connectDB();

app.listen(3001, () => console.log("Server is running on Port 3001"));
