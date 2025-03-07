import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/egotism")
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));
};

export default connectDB;
