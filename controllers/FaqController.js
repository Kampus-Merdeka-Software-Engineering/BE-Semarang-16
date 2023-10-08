import coursedb from "../models/FaqModel.js";

export const createFaq= async (req, res) => {
  try {
    await coursedb.create(req.body);
    res.status(201).json({ msg: "faq created" });
  } catch (error) {
    res.send(error.message);
  }
};
