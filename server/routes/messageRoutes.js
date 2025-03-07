import express from "express";
import { getMessage, messageSubmit } from "../controller/messageController.js";

const messageRouter = express.Router();

messageRouter.post("/post", messageSubmit);
messageRouter.get("/get", getMessage);

export default messageRouter;
