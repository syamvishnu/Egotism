import mongoose from "mongoose";

const messageScema = mongoose.Schema({
  name: {
    type: String,
  },
  message: {
    type: String,
  },
});

const messageModel = mongoose.model("erotism", messageScema);
export default messageModel;
