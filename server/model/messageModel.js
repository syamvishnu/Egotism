import mongoose from "mongoose";

const messageScema = mongoose.Schema({
  username: {
    type: String,
  },
  message: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const messageModel = mongoose.model("erotism", messageScema);
export default messageModel;
