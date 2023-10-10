import Course from "../models/CourseModel.js";

export const createCourse = async (req, res) => {
  try {
    await Course.create(req.body);
    res.status(201).json({ msg: "Course created" });
  } catch (error) {
    res.send(error.message);
  }
};

export const getCoursefromUser = async (req, res) => {
  try {
    const course = await Course.findAll();

    res.status(200).json(course);
  } catch (error) {
    res.send(error.message);
  }
};
