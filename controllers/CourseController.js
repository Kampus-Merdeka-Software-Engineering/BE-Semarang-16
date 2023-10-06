import coursedb from "../models/CourseModel.js";

export const createCourse= async (req, res) => {
  try {
    await coursedb.create(req.body);
    res.status(201).json({ msg: "course created" });
  } catch (error) {
    res.send(error.message);
  }
};
