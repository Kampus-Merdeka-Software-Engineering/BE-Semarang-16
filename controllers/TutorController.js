import coursedb from "../models/TutorModel.js";

export const createTutor= async (req, res) => {
  try {
    await coursedb.create(req.body);
    res.status(201).json({ msg: "tutor created" });
  } catch (error) {
    res.send(error.message);
  }
};
