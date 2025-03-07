import messageModel from "../model/messageModel.js";

const messageSubmit = async (req, res, next) => {
  const { name, message } = req.body;
  try {
    const addData = await messageModel.create({
      name,
      message,
    });

    if (addData) {
      res.status(200).json({ message: "Succssfully added" });
    } else {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

const getMessage = async (req, res, next) => {
  try {
    const wholeData = await messageModel.find();
    if (wholeData) {
      res
        .status(200)
        .json({ message: "Data Get Successfully", data: wholeData });
    }
  } catch (error) {
    next(error);
  }
};
export { messageSubmit, getMessage };
